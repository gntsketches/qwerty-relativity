// Constants *********************************************************************

const constants = {

  fullRange : ["C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8", "C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8","A#8","B8"],
  intervalConversions : {
    'cur': 0,
    '+m2': 1,
    '-m2': -1,
    '+M2': 2,
    '-M2': -2,
    '+m3': 3,
    '-m3': -3,
    '+M3': 4,
    '-M3': -4,
    '+P4': 5,
    '-P4': -5,
    '+tt': 6,
    '-tt': -6,
    '+P5': 7,
    '-P5': -7,
    '+8v': 12,
    '-8v': -12,
  },

  LH_pitch_keys : {
    'space': 'cur',
    'f': '+m2', 'd': '-m2', 'g': '+M2', 's': '-M2',
    'r': '+m3', 'e': '-m3', 't': '+M3', 'w': '-M3',
    '4': '+P4', '3': '-P4', '5': '+tt', '2': '-tt',
    'c': '+P5', 'x': '-P5', 'v': '+8v', 'z': '-8v',
  },

  RH_pitch_keys : {
    'j': '+m2', 'k': '-m2', 'h': '+M2', 'l': '-M2',
    'u': '+m3', 'i': '-m3', 'y': '+M3', 'o': '-M3',
    '8': '+P4', '9': '-P4', '7': '+tt', '0': '-tt',
    'm': '+P5', ',': '-P5', 'n': '+8v', '.': '-8v',
  },


  envelope : { "attack": 0.01, "decay": 0.01, "sustain": 0.75, "release": 3 },

  param_select_keys : {
    'v': 'Portamento',
    'n': 'Portamento',
    'c': 'Vibrato',
    'm': 'Vibrato',
  },

  portamento_keys : {
    'g': 0,
    'h': 0,
    'j': 0.2,
    'f': 0.2,
    'd': 0.5,
    'k': 0.5,
    's': 1,
    'l': 1,
  },

  vibrato_keys : {
    'g': 0,
    'h': 0,
    'j': 2,
    'f': 2,
    'd': 5,
    'k': 5,
    's': 10,
    'l': 10,
  }

}

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

  const setCurrentRootNote = function(thing) {
    let noteIndex = constants.fullRange.indexOf(state.currentRootNote)
    noteIndex = noteIndex + constants.intervalConversions[thing]
    if (noteIndex > 0 && noteIndex <= constants.fullRange.length-1) {
      state.currentRootNote = constants.fullRange[noteIndex]
    }
  }

  const changeEditingParam = function(param) {
    state.editingParam = param
  }

  const setParam = function(value) {
    state.params[state.editingParam] = value
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

  const updateCurrentParam = function() {
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

  return {
    play: playSynth,
    update: updateCurrentParam
  }

})()

// View ****************************************************************************

const view = (function() {
  const leftHandView = $('#left-hand')
  const rightHandView = $('#right-hand')

  const buildNoteView = function(note) {
    return "<div class='current-note'>"  + note + "</div>"
  }

  const buildSculptView = function(param, value) {
     return $([
      "<div class='sound-sculpting'>",
      "  <div class='editing-param'>" + param + "</div>",
      "  <div class='param-value'>" + value + "</div>",
      "</div>"
    ].join("\n"));
  }

  const setLeftHandView = function() {
    if (model.state.handed==='left') leftHandView.html(buildNoteView(model.state.currentRootNote))
    else leftHandView.html(buildSculptView(model.state.editingParam, model.state.params[model.state.editingParam] ))
  }
  const setRightHandView = function() {
    if (model.state.handed==='right') rightHandView.html(buildNoteView(model.state.currentRootNote))
    else rightHandView.html(buildSculptView(model.state.editingParam, model.state.params[model.state.editingParam] ))
  }

  return {
    setLeftHandView: setLeftHandView,
    setRightHandView: setRightHandView,
    initView: function() {
      setLeftHandView()
      setRightHandView()
    }
  }

})()

console.log('view', view)



// "Controller" ***************************************************************************

const interpretKeypress = function(zone, pressed) {
  switch(zone) {
    case 'general':
      if (pressed==='ctrl-z' || pressed==='ctrl-/') {
        if (model.state.handed==='right') { model.state.handed = 'left'}
        else if (model.state.handed==='left') { model.state.handed = 'right'}
        view.initView()
        //  later, with pubsub, it'll do that itself...
      }
      break
    case 'left':
      if (model.state.handed==='left') {
        model.setRoot(constants.LH_pitch_keys[pressed])
        view.setLeftHandView()
        audio.play()
      } else {
        model.updateParam(pressed) // state
        audio.update()
        view.setLeftHandView()
      }
      break
    case 'right':
      if (model.state.handed==='right') {
        model.setRoot(constants.RH_pitch_keys[pressed])
        view.setRightHandView()
        audio.play()
      } else {
        model.updateParam(pressed) // state
        audio.update()
        view.setRightHandView()
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
