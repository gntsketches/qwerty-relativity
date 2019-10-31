

const general_combos = [
  {
    "keys": "control z",
    "on_keydown": function () {
      console.log('control z')
      interpretKeypress('general', 'ctrl-z')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": false,
  },
  {
    "keys": "control /",
    "on_keydown": function () {
      console.log('control /')
      interpretKeypress('general', 'ctrl-/')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_exclusive": false,
  }
]


// LH  *************************************************************************************************
const LH_keys = [
  {
    "keys": "space",
    "on_keydown": function () {
      // console.log('space')
      interpretKeypress('left', 'space')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,

  },
  {
    "keys": "f",
    "on_keydown": function () {
      // console.log('f')
      interpretKeypress('left', 'f')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },
  {
    "keys": "d",
    "on_keydown": function () {
      // console.log('d')
      interpretKeypress('left', 'd')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },
  {
    "keys": "g",
    "on_keydown": function () {
      // console.log('g')
      interpretKeypress('left', 'g')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },
  {
    "keys": "s",
    "on_keydown": function () {
      // console.log('s')
      interpretKeypress('left', 's')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },
  {
    "keys": "r",
    "on_keydown": function () {
      interpretKeypress('left', 'r')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },
  {
    "keys": "e",
    "on_keydown": function () {
      interpretKeypress('left', 'e')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },
  {
    "keys": "t",
    "on_keydown": function () {
      interpretKeypress('left', 't')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },
  {
    "keys": "w",
    "on_keydown": function () {
      interpretKeypress('left', 'w')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },
  {
    "keys": "4",
    "on_keydown": function () {
      interpretKeypress('left', '4')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },
  {
    "keys": "3",
    "on_keydown": function () {
      interpretKeypress('left', '3')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },
  {
    "keys": "5",
    "on_keydown": function () {
      interpretKeypress('left', '5')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },
  {
    "keys": "2",
    "on_keydown": function () {
      interpretKeypress('left', '2')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },
  {
    "keys": "c",
    "on_keydown": function () {
      interpretKeypress('left', 'c')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },
  {
    "keys": "x",
    "on_keydown": function () {
      interpretKeypress('left', 'x')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },
  {
    "keys": "v",
    "on_keydown": function () {
      interpretKeypress('left', 'v')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },
  {
    "keys": "z",
    "on_keydown": function () {
      interpretKeypress('left', 'z')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },

  // DOUBLES
  {
    "keys": "q w",
    "on_keydown": function () {
      interpretKeypress('left', 'qw')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "q e",
    "on_keydown": function () {
      interpretKeypress('left', 'qe')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "q r",
    "on_keydown": function () {
      interpretKeypress('left', 'qr')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "q t",
    "on_keydown": function () {
      interpretKeypress('left', 'qt')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "a s",
    "on_keydown": function () {
      interpretKeypress('left', 'as')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "a d",
    "on_keydown": function () {
      interpretKeypress('left', 'ad')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "a f",
    "on_keydown": function () {
      interpretKeypress('left', 'af')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "a g",
    "on_keydown": function () {
      interpretKeypress('left', 'ag')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  }
]

// RH  *************************************************************************************************
const RH_keys = [

  {
    "keys": "space",
    "on_keydown": function () {
      // console.log('space')
      interpretKeypress('right', 'space')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },
  {
    "keys": "j",
    "on_keydown": function () {
      // console.log('f')
      interpretKeypress('right', 'j')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },
  {
    "keys": "k",
    "on_keydown": function () {
      // console.log('d')
      interpretKeypress('right', 'k')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },
  {
    "keys": "h",
    "on_keydown": function () {
      // console.log('g')
      interpretKeypress('right', 'h')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },
  {
    "keys": "l",
    "on_keydown": function () {
      // console.log('s')
      interpretKeypress('right', 'l')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },
  {
    "keys": "i",
    "on_keydown": function () {
      interpretKeypress('right', 'i')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },
  {
    "keys": "o",
    "on_keydown": function () {
      interpretKeypress('right', 'o')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },
  {
    "keys": "y",
    "on_keydown": function () {
      interpretKeypress('right', 'y')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },
  {
    "keys": "u",
    "on_keydown": function () {
      interpretKeypress('right', 'u')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },
  {
    "keys": "8",
    "on_keydown": function () {
      interpretKeypress('right', '8')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },
  {
    "keys": "9",
    "on_keydown": function () {
      interpretKeypress('right', '9')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },
  {
    "keys": "7",
    "on_keydown": function () {
      interpretKeypress('right', '7')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },
  {
    "keys": "0",
    "on_keydown": function () {
      interpretKeypress('right', '0')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },
  {
    "keys": "m",
    "on_keydown": function () {
      interpretKeypress('right', 'm')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },
  {
    "keys": ",",
    "on_keydown": function () {
      interpretKeypress('right', ',')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },
  {
    "keys": "n",
    "on_keydown": function () {
      interpretKeypress('right', 'n')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },
  {
    "keys": ".",
    "on_keydown": function () {
      interpretKeypress('right', '.')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
    "is_solitary": true,
  },

  // DOUBLES
  {
    "keys": "p o",
    "on_keydown": function () {
      interpretKeypress('right', 'po')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "p i",
    "on_keydown": function () {
      interpretKeypress('right', 'pi')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "p u",
    "on_keydown": function () {
      interpretKeypress('right', 'pu')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "p y",
    "on_keydown": function () {
      interpretKeypress('right', 'py')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "; l",
    "on_keydown": function () {
      interpretKeypress('right', ';l')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "; k",
    "on_keydown": function () {
      interpretKeypress('right', ';k')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "; j",
    "on_keydown": function () {
      interpretKeypress('right', ';j')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  },
  {
    "keys": "; h",
    "on_keydown": function () {
      interpretKeypress('right', ';h')
    },
    "this": this, "prevent_default": true, "prevent_repeat": true, "is_unordered": true, "is_sequence": false,
  }

]
