// Constants *********************************************************************
const fullRange = ["C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8", "C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8","A#8","B8"]
const intervalConversions = {
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
}

const LH_pitch_keys = {
  'space': 'cur',
  'f': '+m2', 'd': '-m2', 'g': '+M2', 's': '-M2',
  'r': '+m3', 'e': '-m3', 't': '+M3', 'w': '-M3',
  '4': '+P4', '3': '-P4', '5': '+tt', '2': '-tt',
  'c': '+P5', 'x': '-P5', 'v': '+8v', 'z': '-8v',
}

const RH_pitch_keys = {
  'k': '+m2', 'j': '-m2', 'h': '+M2', 'l': '-M2',
  'i': '+m3', 'u': '-m3', 'o': '+M3', 'y': '-M3',
  '9': '+P4', '8': '-P4', '0': '+tt', '7': '-tt',
  'm': '+P5', ',': '-P5', 'n': '+8v', '.': '-8v',
}

const envelope = { "attack": 0.01, "decay": 0.01, "sustain": 0.75, "release": 3 }



// Model *************************************************************************
const state = {
  handed: 'left',
  currentRootNote: 'C3',
  portamento: 0,
}

const setCurrentRootNote = function(thing) {
  let noteIndex = fullRange.indexOf(state.currentRootNote)
  noteIndex = noteIndex + intervalConversions[thing]
  if (noteIndex > 0 && noteIndex <= fullRange.length-1) {
    state.currentRootNote = fullRange[noteIndex]
  }
}

// Audio *************************************************************************
const synth = new Tone.Synth(
  {
    "oscillator" : { "type" : "triangle" },
    "envelope" : envelope
  }
).toMaster()

const playSynth = function() {
    synth.triggerAttackRelease(state.currentRootNote, '8n')

}


// View ****************************************************************************

const leftHandView = $('#left-hand')
const rightHandView = $('#right-hand')

const setLeftHandNoteView = function(noteDisplay) {
  leftHandView.html(noteDisplay)
}

const setRightHandNoteView = function(noteDisplay) {
  rightHandView.html(noteDisplay)
}


// Boss ***************************************************************************
const interpretKeypress = function(zone, pressed) {
  switch(zone) {
    case 'general':

      break
    case 'left':
      if (state.handed==='left') {
        setCurrentRootNote(LH_pitch_keys[pressed])
        setLeftHandNoteView(state.currentRootNote)
        playSynth(state.currentRootNote)
      } else {
        console.log('pressed', pressed)
      }
      break
    case 'right':
      if (state.handed==='right') {
        setCurrentRootNote(RH_pitch_keys[pressed])
        setRightHandNoteView(state.currentRootNote)
        playSynth(state.currentRootNote)
      } else {
        console.log('pressed', pressed)
      }
      break
  }
}


// Keypress *************************************************************************

const listener = new window.keypress.Listener();
// prevent_default:true prevents sub combo from registering in non-keypress listener...

let general_pitch_listeners = listener.register_many(general_pitch_shifts)
let LH_pitch_listeners = listener.register_many(LH_pitch_shift)
let RH_pitch_listeners = listener.register_many(RH_pitch_shift)
console.log(general_pitch_listeners)
console.log(LH_pitch_listeners)
console.log(RH_pitch_listeners)

// listener.unregister_many(LH_pitch_listeners);

