

const general_combos = [
  {
    "keys": "control z",
    "on_keydown": function () {
      console.log('control z')
      interpretKeypress('general', 'ctrl-z')
    },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "control /",
    "on_keydown": function () {
      console.log('control /')
      interpretKeypress('general', 'ctrl-/')
    },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  }
]


// LH  *************************************************************************************************
const LH_keys = [
  {
    "keys": "space",
    "on_keydown": function () { interpretKeypress('left', 'space') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "f",
    "on_keydown": function () { interpretKeypress('left', 'f') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "d",
    "on_keydown": function () { interpretKeypress('left', 'd') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "g",
    "on_keydown": function () { interpretKeypress('left', 'g') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "s",
    "on_keydown": function () { interpretKeypress('left', 's') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "r",
    "on_keydown": function () { interpretKeypress('left', 'r') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "e",
    "on_keydown": function () { interpretKeypress('left', 'e') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "t",
    "on_keydown": function () { interpretKeypress('left', 't') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "w",
    "on_keydown": function () { interpretKeypress('left', 'w') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "4",
    "on_keydown": function () { interpretKeypress('left', '4') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "3",
    "on_keydown": function () { interpretKeypress('left', '3') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "5",
    "on_keydown": function () { interpretKeypress('left', '5') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "2",
    "on_keydown": function () { interpretKeypress('left', '2') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "c",
    "on_keydown": function () { interpretKeypress('left', 'c') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "x",
    "on_keydown": function () { interpretKeypress('left', 'x') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "v",
    "on_keydown": function () { interpretKeypress('left', 'v') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "z",
    "on_keydown": function () { interpretKeypress('left', 'z') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "b",
    "on_keydown": function () { interpretKeypress('left', 'b') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },

  // DOUBLES
  {
    "keys": "q w",
    "on_keydown": function () { interpretKeypress('left', 'qw') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "q e",
    "on_keydown": function () { interpretKeypress('left', 'qe') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "q r",
    "on_keydown": function () { interpretKeypress('left', 'qr') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "q t",
    "on_keydown": function () { interpretKeypress('left', 'qt') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "a s",
    "on_keydown": function () { interpretKeypress('left', 'as') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "a d",
    "on_keydown": function () { interpretKeypress('left', 'ad') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "a f",
    "on_keydown": function () { interpretKeypress('left', 'af') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "a g",
    "on_keydown": function () { interpretKeypress('left', 'ag') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  }
]

// RH  *************************************************************************************************
const RH_keys = [

  {
    "keys": "space",
    "on_keydown": function () { interpretKeypress('right', 'space') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "j",
    "on_keydown": function () { interpretKeypress('right', 'j') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "k",
    "on_keydown": function () { interpretKeypress('right', 'k') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "h",
    "on_keydown": function () { interpretKeypress('right', 'h') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "l",
    "on_keydown": function () { interpretKeypress('right', 'l') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "i",
    "on_keydown": function () { interpretKeypress('right', 'i') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "o",
    "on_keydown": function () { interpretKeypress('right', 'o') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "y",
    "on_keydown": function () { interpretKeypress('right', 'y') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "u",
    "on_keydown": function () { interpretKeypress('right', 'u') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "8",
    "on_keydown": function () { interpretKeypress('right', '8') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "9",
    "on_keydown": function () { interpretKeypress('right', '9') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "7",
    "on_keydown": function () { interpretKeypress('right', '7') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "0",
    "on_keydown": function () { interpretKeypress('right', '0') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "m",
    "on_keydown": function () { interpretKeypress('right', 'm') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": ",",
    "on_keydown": function () { interpretKeypress('right', ',') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "n",
    "on_keydown": function () { interpretKeypress('right', 'n') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": ".",
    "on_keydown": function () { interpretKeypress('right', '.') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },
  {
    "keys": "/",
    "on_keydown": function () { interpretKeypress('right', '/') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "is_solitary": true,
  },

  // DOUBLES
  {
    "keys": "p o",
    "on_keydown": function () { interpretKeypress('right', 'po') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "p i",
    "on_keydown": function () { interpretKeypress('right', 'pi') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "p u",
    "on_keydown": function () { interpretKeypress('right', 'pu') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "p y",
    "on_keydown": function () { interpretKeypress('right', 'py') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "; l",
    "on_keydown": function () { interpretKeypress('right', ';l') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "; k",
    "on_keydown": function () { interpretKeypress('right', ';k') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "; j",
    "on_keydown": function () { interpretKeypress('right', ';j') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "; h",
    "on_keydown": function () { interpretKeypress('right', ';h') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  }

]
