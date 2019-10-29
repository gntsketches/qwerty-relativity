

const general_pitch_shifts = [
  {
    "keys": "control z",
    "on_keydown": function () {
      console.log('control z')
      interpretKeypress('general', 'ctrl-z')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": true,
    "is_exclusive": true,
  },
  {
    "keys": "control /",
    "on_keydown": function () {
      console.log('control /')
      interpretKeypress('general', 'ctrl-z')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  }
]


// LH PITCH SHIFTS *************************************************************************************************
const LH_pitch_shift = [
  {
    "keys": "space",
    "on_keydown": function () {
      // console.log('space')
      interpretKeypress('left', 'space')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": "f",
    "on_keydown": function () {
      // console.log('f')
      interpretKeypress('left', 'f')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": "d",
    "on_keydown": function () {
      // console.log('d')
      interpretKeypress('left', 'd')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": "g",
    "on_keydown": function () {
      // console.log('g')
      interpretKeypress('left', 'g')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": "s",
    "on_keydown": function () {
      // console.log('s')
      interpretKeypress('left', 's')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": "r",
    "on_keydown": function () {
      interpretKeypress('left', 'r')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": "e",
    "on_keydown": function () {
      interpretKeypress('left', 'e')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": "t",
    "on_keydown": function () {
      interpretKeypress('left', 't')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": "w",
    "on_keydown": function () {
      interpretKeypress('left', 'w')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": "4",
    "on_keydown": function () {
      interpretKeypress('left', '4')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": "3",
    "on_keydown": function () {
      interpretKeypress('left', '3')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": "5",
    "on_keydown": function () {
      interpretKeypress('left', '5')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": "2",
    "on_keydown": function () {
      interpretKeypress('left', '2')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": "c",
    "on_keydown": function () {
      interpretKeypress('left', 'c')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": "x",
    "on_keydown": function () {
      interpretKeypress('left', 'x')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": "v",
    "on_keydown": function () {
      interpretKeypress('left', 'v')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": "z",
    "on_keydown": function () {
      interpretKeypress('left', 'z')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  }
]

// RH PITCH SHIFTS *************************************************************************************************
const RH_pitch_shift = [

  {
    "keys": "space",
    "on_keydown": function () {
      // console.log('space')
      interpretKeypress('right', 'space')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": "j",
    "on_keydown": function () {
      // console.log('f')
      interpretKeypress('right', 'j')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": "k",
    "on_keydown": function () {
      // console.log('d')
      interpretKeypress('right', 'k')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": "h",
    "on_keydown": function () {
      // console.log('g')
      interpretKeypress('right', 'h')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": "l",
    "on_keydown": function () {
      // console.log('s')
      interpretKeypress('right', '1')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": "i",
    "on_keydown": function () {
      interpretKeypress('right', 'i')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": "o",
    "on_keydown": function () {
      interpretKeypress('right', 'o')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": "u",
    "on_keydown": function () {
      interpretKeypress('right', 'u')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": "p",
    "on_keydown": function () {
      interpretKeypress('right', 'p')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": "8",
    "on_keydown": function () {
      interpretKeypress('right', '8')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": "9",
    "on_keydown": function () {
      interpretKeypress('right', '9')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": "7",
    "on_keydown": function () {
      interpretKeypress('right', '7')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": "0",
    "on_keydown": function () {
      interpretKeypress('right', '0')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": "m",
    "on_keydown": function () {
      interpretKeypress('right', 'm')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": ",",
    "on_keydown": function () {
      interpretKeypress('right', ',')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": "n",
    "on_keydown": function () {
      interpretKeypress('right', 'n')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  },
  {
    "keys": ".",
    "on_keydown": function () {
      interpretKeypress('right', '.')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": true,
  }
]
