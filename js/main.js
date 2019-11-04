
console.log('pubSub', pubSub)

// Model *************************************************************************

const model = (function() {

  const state = {
    handed: 'left',
    currentRootNote: 'C3',
    editingParam: 'Portamento',
    params: {
      Portamento: 0,
      Vibrato: 0
    }
  }

  const swapHands = function() {
    if (state.handed==='right') { state.handed = 'left'}
    else if (state.handed==='left') { state.handed = 'right'}
    pubSub.publish('swapHands')
  }

  const setCurrentRootNote = function(interval) {
    let noteIndex = constants.fullRange.indexOf(state.currentRootNote)
    noteIndex = noteIndex + constants.intervalConversions[interval]
    if (noteIndex > -1 && noteIndex <= constants.fullRange.length-1) {
      state.currentRootNote = constants.fullRange[noteIndex]
    }
    pubSub.publish('rootNoteChanged', state.currentRootNote)
  }

  const changeEditingParam = function(param) {
    state.editingParam = param
    pubSub.publish('soundParamsChanged')
  }

  const setParam = function(value) {
    state.params[state.editingParam] = value
    pubSub.publish('soundParamsChanged')
  }

  const updateParamFromKey = function(pressed) {
    console.log('pressed', pressed)
    if (pressed in constants.param_select_keys) {
      changeEditingParam(constants.param_select_keys[pressed])
    } else if (state.editingParam==='Portamento' && pressed in constants.portamento_keys) {
      setParam(constants.portamento_keys[pressed])
    } else if (state.editingParam==='Vibrato' && pressed in constants.vibrato_keys) {
      setParam(constants.vibrato_keys[pressed])
    }
  }


  return {
    state: state,
    swapHands: swapHands,
    setRoot: setCurrentRootNote,
    updateParam: updateParamFromKey
  }

})()

// Audio *************************************************************************

const audio = (function() {

  const synth = new Tone.Synth(
    {
      "oscillator" : { "type" : "triangle" },
      "envelope" : constants.envelope
    }
  )
  const vibrato = new Tone.Vibrato()
  vibrato.frequency.value = model.state.params.Vibrato
  const gain = new Tone.Gain()
  gain.gain.value = 0.5
  synth.connect(vibrato)
  vibrato.connect(gain)
  gain.toMaster()

  const playSynth = function() {
    synth.triggerAttackRelease(model.state.currentRootNote, '8n')
  }

  const setPortamento = function() {
    synth.portamento = model.state.params.Portamento
  }

  const setVibratoFrequency = function() {
    vibrato.frequency.value = model.state.params.Vibrato
  }

  const updateCurrentSoundParam = function() {
    console.log('updating current sound param')
    switch (model.state.editingParam) {
      case 'Portamento':
        setPortamento()
        break
      case 'Vibrato':
        setVibratoFrequency()
        console.log('vib', vibrato.frequency.value)
        break
    }
  }

  pubSub.subscribe('soundParamsChanged', updateCurrentSoundParam)

  return {
    play: playSynth,
  }

})()

// View ****************************************************************************

const view = (function() {
  const leftHandView = $('#left-hand')
  const rightHandView = $('#right-hand')

  let rootNoteView = null, soundParamsView = null


  const buildNoteView = function(note) {
    return "<div class='current-note'>"  + note + "</div>"
  }

  const buildSoundParamsView = function(param, value) {
     return $([
      "<div class='sound-params'>",
      "  <div class='editing-param'>" + param + "</div>",
      "  <div class='param-value'>" + value + "</div>",
      "</div>"
    ].join("\n"));
  }


  const updateRootNoteView = function() {
    console.log('changing root view...', model.state.currentRootNote)
    rootNoteView.html(buildNoteView(model.state.currentRootNote))
  }

  const updateSoundParamsView = function() {
      console.log('updating sound params view')
     soundParamsView.html(buildSoundParamsView(model.state.editingParam, model.state.params[model.state.editingParam] ))
  }

  const initView = function() {
    console.log('initializing view')
    if (model.state.handed === 'left') {
      rootNoteView = leftHandView
      soundParamsView = rightHandView
    } else {
      rootNoteView = rightHandView
      soundParamsView = leftHandView
    }
    updateRootNoteView()
    updateSoundParamsView()
  }

  pubSub.subscribe('swapHands', initView)
  pubSub.subscribe('rootNoteChanged', updateRootNoteView)
  pubSub.subscribe('soundParamsChanged', updateSoundParamsView)


  return {
    initView: initView,
  }

})()

console.log('view', view)



// "Controller" ***************************************************************************

const interpretKeypress = function(zone, pressed) {
  switch(zone) {
    case 'general':
      if (pressed==='ctrl-z' || pressed==='ctrl-/') {
        model.swapHands()
      }
      break
    case 'left':
      if (model.state.handed==='left') {
      // if (model.state.leftHand==='pitches') {
        model.setRoot(constants.LH_pitch_keys[pressed])
        audio.play()
      } else {
      // } else if (model.state.leftHand==='params' {
        model.updateParam(pressed)
      }
      break
    case 'right':
      if (model.state.handed==='right') {
        model.setRoot(constants.RH_pitch_keys[pressed])
        audio.play()
      } else {
        model.updateParam(pressed)
      }
      break
    case 'left-shifted':
      if (model.state.handed==='left') {
        model.setRoot(constants.LH_pitch_keys[pressed])
      } else {
        // do something special?
        model.updateParam(pressed)
      }
      break
    case 'right-shifted':
      if (model.state.handed==='right') {
        model.setRoot(constants.RH_pitch_keys[pressed])
      } else {
        // do something special?
        model.updateParam(pressed)
      }
      break
  }
}


// Keypress *************************************************************************

const listener = new window.keypress.Listener();
// prevent_default:true prevents sub combo from registering in non-keypress listener...

let general_pitch_listeners = listener.register_many(general_combos)
let LH_pitch_listeners = listener.register_many(LH_keys)
let RH_pitch_listeners = listener.register_many(RH_keys)
// console.log(general_pitch_listeners)
// console.log(LH_pitch_listeners)
// console.log(RH_pitch_listeners)
// listener.unregister_many(LH_pitch_listeners);

const init = function() {
  view.initView()
}

init()
