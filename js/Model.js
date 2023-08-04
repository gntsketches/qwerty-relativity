
// console.log('pubSub', pubSub)

// Model *************************************************************************

const model = (function() {

  const state = {

    leftHand: 'synth1',
    rightHand: 'synth2',
    spacebar: 'left',
    synthsLinked: false,
    paramsLinked: false,

    synth1: {
      sustain: 'Pluck',
      holding: false,
      // traveling: true,
      wave: 'sawtooth',
      pressed: null,
      pitch: 'C3',
      editingParam: 'Portamento',
      params: {
        Portamento: 0,
        Vibrato: 0
      },
    },
    synth2: {
      sustain: 'Pluck',
      holding: false,
      // traveling: true,
      wave: 'triangle',
      pressed: null,
      pitch: 'C4',
      editingParam: 'Portamento',
      params: {
        Portamento: 0,
        Vibrato: 0
      },
    },
  }


  const changeSustainMode = function(hand) {
    const getNextSustainMode = function(currentSustainMode) {
      if (currentSustainMode==='Pluck') { return 'Press' }
      if (currentSustainMode==='Press') { return 'Hold' }
      if (currentSustainMode==='Hold') { return 'Pluck' }
    }

    if (state[hand]==='synth1' || state[hand]==='params1') {
      state.synth1.sustain = getNextSustainMode(state.synth1.sustain)
      pubSub.publish('synth1SustainChanged')
    } else {
      state.synth2.sustain = getNextSustainMode(state.synth2.sustain)
      pubSub.publish('synth2SustainChanged')
    }

  }

  const setHand = function(hand, setting) {
    console.log(hand, state[hand])
    state[hand] = setting
    console.log(hand, state[hand])

    view.initView() // for consistency should you pubSub?
  }

  const toggleSynth = function(hand) {
    if (state[hand]==='synth1') { setHand(hand, 'synth2')
    } else { setHand(hand, 'synth1') }
  };

  const toggleParams = function(hand) {
    if (state[hand]==='params1') { setHand(hand, 'params2')
    } else { setHand(hand, 'params1') }
  };

  const toggleHolding = function(synthNum) {
    if (synthNum === 'synth1') {
      state.synth1.holding = !state.synth1.holding
      console.log('holding?', state.synth1.holding)
      pubSub.publish('synth1HoldingToggled')
    }
    else {
      state.synth2.holding = !state.synth2.holding
      pubSub.publish('synth2HoldingToggled')
    }
  }

  const swapHands = function() {
    // const lh = JSON.parse(state.leftHand)
    // const rh = JSON.parse(state.rightHand)
    const lh = state.leftHand, rh = state.rightHand
    console.log('lh', lh, 'rh', rh)
    state.leftHand = rh
    state.rightHand = lh
    console.log('leftHand', state.leftHand)
    console.log('rightHand', state.rightHand)
    this.toggleSpaceBar()
    pubSub.publish('swapHands')
  }

  const toggleSpaceBar = function() {
    if (state.spacebar==='left') { state.spacebar = 'right' }
    else if (state.spacebar==='right') { state.spacebar = 'left' }

    console.log('spacebar', state.spacebar)
    pubSub.publish('spacebarToggled')
  }

  const changeSynthWave = function(synthNum) {
    console.log('changing wave')
    let wave = state[synthNum].wave;
    switch (wave) {
      case 'sine': wave = 'triangle'; break;
      case 'triangle': wave = 'sawtooth'; break;
      case 'sawtooth': wave = 'square'; break;
      case 'square': wave = 'sine'; break;
    }
    state[synthNum].wave = wave
    if (synthNum === 'synth1') {
      pubSub.publish('synth1WaveChanged')
    } else {
      pubSub.publish('synth2WaveChanged')
    }
  }


  const setPitchAndPressed = function(hand, synthNum, pressed) {
    console.log('in setPitchAndPressed', synthNum, pressed)
    let interval
    if (hand==='left') { interval = constants.LH_pitch_keys[pressed] }
    else if (hand==='right') { interval = constants.RH_pitch_keys[pressed] }
    // console.log('interval', interval)
    let noteIndex = constants.fullRange.indexOf(state[synthNum].pitch)
    noteIndex = noteIndex + constants.intervalConversions[interval]
    if (noteIndex > -1 && noteIndex <= constants.fullRange.length-1) {
      state[synthNum].pressed = pressed
      state[synthNum].pitch = constants.fullRange[noteIndex]
    }
    if (synthNum === 'synth1') {
      pubSub.publish('basePitch1Changed', state[synthNum].pitch)
    } else if (synthNum === 'synth2') {
      pubSub.publish('basePitch2Changed', state[synthNum].pitch)
    }
  }

  const updateParamFromKey = function(synthNum, pressed) {
    // console.log('pressed', pressed)
    if (pressed in constants.param_select_keys) {
      const param = constants.param_select_keys[pressed]
      // console.log('param', param)
      changeEditingParam(synthNum, param)
    } else if (pressed in constants.portamento_keys || pressed in constants.vibrato_keys) {
      if ( (synthNum==='synth1' && state.synth1.editingParam==='Portamento') ||
           (synthNum==='synth2' && state.synth2.editingParam==='Portamento') ) {
        setParam(synthNum, constants.portamento_keys[pressed])
      } else if ( (synthNum==='synth1' && state.synth1.editingParam==='Vibrato') ||
           (synthNum==='synth2' && state.synth2.editingParam==='Vibrato') ) {
        setParam(synthNum, constants.vibrato_keys[pressed])
      }
    }
  }

  const changeEditingParam = function(synthNum, param) {
    state[synthNum].editingParam = param
    if (synthNum === 'synth1') {
      pubSub.publish('params1Changed')
    } else if (synthNum === 'synth2') {
      pubSub.publish('params2Changed')
    }
  }

  const setParam = function(synthNum, value) {
    // console.log(value)
    state[synthNum].params[state[synthNum].editingParam] = value
    if (synthNum === 'synth1') {
      pubSub.publish('params1Changed')
    } else if (synthNum === 'synth2') {
      pubSub.publish('params2Changed')
    }
  }


  return {
    state: state,
    changeSustainMode: changeSustainMode,
    toggleSynth: toggleSynth,
    toggleParams: toggleParams,
    swapHands: swapHands,
    toggleSpaceBar: toggleSpaceBar,
    changeSynthWave: changeSynthWave,
    setPitchAndPressed: setPitchAndPressed,
    updateParamFromKey: updateParamFromKey,
    toggleHolding: toggleHolding,
  }

})()
