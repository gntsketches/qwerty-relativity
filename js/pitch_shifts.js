

const general_pitch_shifts = [
  {
    "keys": "space",
    "on_keydown": function () {
      // console.log('space')
      interpretKeypress('cur')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  }
]


// LH PITCH SHIFTS *************************************************************************************************
const LH_pitch_shift = [
  {
    "keys": "f",
    "on_keydown": function () {
      // console.log('f')
      interpretKeypress('+m1')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "d",
    "on_keydown": function () {
      // console.log('d')
      interpretKeypress('-m1')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "g",
    "on_keydown": function () {
      // console.log('g')
      interpretKeypress('+M2')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "s",
    "on_keydown": function () {
      // console.log('s')
      interpretKeypress('-M2')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "r",
    "on_keydown": function () {
      interpretKeypress('+m3')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "e",
    "on_keydown": function () {
      interpretKeypress('-m3')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "t",
    "on_keydown": function () {
      interpretKeypress('+M3')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "w",
    "on_keydown": function () {
      interpretKeypress('-M3')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "4",
    "on_keydown": function () {
      interpretKeypress('+P4')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "3",
    "on_keydown": function () {
      interpretKeypress('-P4')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "5",
    "on_keydown": function () {
      interpretKeypress('+tt')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "2",
    "on_keydown": function () {
      interpretKeypress('-tt')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "c",
    "on_keydown": function () {
      interpretKeypress('+P5')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "x",
    "on_keydown": function () {
      interpretKeypress('-P5')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "v",
    "on_keydown": function () {
      interpretKeypress('+8v')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "z",
    "on_keydown": function () {
      interpretKeypress('-8v')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  }
]

// RH PITCH SHIFTS *************************************************************************************************
const RH_pitch_shift = [
  {
    "keys": "j",
    "on_keydown": function () {
      // console.log('f')
      interpretKeypress('+m1')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "k",
    "on_keydown": function () {
      // console.log('d')
      interpretKeypress('-m1')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "h",
    "on_keydown": function () {
      // console.log('g')
      interpretKeypress('+M2')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "l",
    "on_keydown": function () {
      // console.log('s')
      interpretKeypress('-M2')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "i",
    "on_keydown": function () {
      interpretKeypress('+m3')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "o",
    "on_keydown": function () {
      interpretKeypress('-m3')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "u",
    "on_keydown": function () {
      interpretKeypress('+M3')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "p",
    "on_keydown": function () {
      interpretKeypress('-M3')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "8",
    "on_keydown": function () {
      interpretKeypress('+P4')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "9",
    "on_keydown": function () {
      interpretKeypress('-P4')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "7",
    "on_keydown": function () {
      interpretKeypress('+tt')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "0",
    "on_keydown": function () {
      interpretKeypress('-tt')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "m",
    "on_keydown": function () {
      interpretKeypress('+P5')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": ",",
    "on_keydown": function () {
      interpretKeypress('-P5')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "n",
    "on_keydown": function () {
      interpretKeypress('+8v')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": ".",
    "on_keydown": function () {
      interpretKeypress('-8v')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  }
]
