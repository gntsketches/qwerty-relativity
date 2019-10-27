// Constants *********************************************************************
const fullRange = ["C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8", "C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8","A#8","B8"]
const intervalConversions = {
  'cur': 0,
  '+m1': 1,
  '-m1': -1,
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
const envelope = { "attack": 0.01, "decay": 0.01, "sustain": 0.75, "release": 3 }



// Model *************************************************************************
let currentRootNote = 'C3';
const setCurrentRootNote = function(thing) {
  let noteIndex = fullRange.indexOf(currentRootNote)
  noteIndex = noteIndex + intervalConversions[thing]
  if (noteIndex > 0 && noteIndex <= fullRange.length-1) {
    currentRootNote = fullRange[noteIndex]
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
    synth.triggerAttackRelease(currentRootNote, '8n')

}


// View ***************************************************************************
const currentRootNoteView = $('#current-root-note')

const setCurrentRootNoteView = function(noteDisplay) {
  currentRootNoteView.html(noteDisplay)
}


// Boss ***************************************************************************
const interpretKeypress = function(stuff) {
  setCurrentRootNote(stuff)
  setCurrentRootNoteView(currentRootNote)
  playSynth(currentRootNote)
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

