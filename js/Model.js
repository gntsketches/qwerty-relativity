
// console.log('pubSub', pubSub)

// Model *************************************************************************

const model = (function() {

  const state = {

    leftHand: 'synth1',
    rightHand: 'params1',
    spacebar: 'left',
    synthsLinked: false,
    paramsLinked: false,

    synth1: {
      sustain: 'Hold',
      holding: false,
      // traveling: true,
      wave: 'Triangle',
      pressed: null,
      pitch: 'C3',
      editingParam: 'Portamento',
      params: {
        Portamento: 0,
        Vibrato: 0
      },
    },
    synth2: {
      sustain: 'Hold',
      holding: false,
      // traveling: true,
      wave: 'Sawtooth',
      pressed: null,
      pitch: 'C3',
      editingParam: 'Portamento',
      params: {
        Portamento: 0,
        Vibrato: 0
      },
    },
  }

  const setLeftHand = function (setting) {
    state.leftHand = setting
    console.log('left', state.leftHand)
    view.initView() // for consistency should you pubSub?
  }

  const setRightHand = function (setting) {
    state.rightHand = setting
    view.initView() // for consistency should you pubSub?
  }

  const toggleHolding = function(synthNum) {
    if (synthNum === 'synth1') {
      state.synth1.holding = !state.synth1.holding
      console.log('holding?', state.synth1.holding)
      pubSub.publish('synth1HoldingToggled')
    }
    else {
    console.log(synthNum, 'Toggling')
      state.synth2.holding = !state.synth2.holding
      pubSub.publish('synth2HoldingToggled')
    }
  }

  const swapHands = function() {
    if (state.spacebar==='left') { state.spacebar = 'right' }
    else if (state.spacebar==='right') { state.spacebar = 'left' }

    console.log('spacebar', state.spacebar)
    // const lh = JSON.parse(state.leftHand)
    // const rh = JSON.parse(state.rightHand)
    const lh = state.leftHand, rh = state.rightHand
    console.log('lh', lh, 'rh', rh)
    state.leftHand = rh
    state.rightHand = lh
    console.log('leftHand', state.leftHand)
    console.log('rightHand', state.rightHand)

    pubSub.publish('swapHands')
  }

  const setPitchAndPressed = function(hand, synthNum, pressed) {
    console.log('in setPitchAndPressed', synthNum, pressed)
    let interval
    if (hand==='left') { interval = constants.LH_pitch_keys[pressed] }
    else if (hand==='right') { interval = constants.RH_pitch_keys[pressed] }
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
    setLeftHand: setLeftHand,
    setRightHand: setRightHand,
    swapHands: swapHands,
    setPitchAndPressed: setPitchAndPressed,
    updateParamFromKey: updateParamFromKey,
    toggleHolding: toggleHolding,
  }

})()
