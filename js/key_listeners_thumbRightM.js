
const singleKeyExcludedLeft = "shift ctrl tab t g 1 6"
const singleKeyExcludedRight = "shift ctrl u j ] enter 8 backspace"
const doubleKeyExcluded = "shift control"
// const doubleKeyExcluded = "shift control"
const shiftedSingleKeyExcludedLeft = "control tab t g"
const shiftedSingleKeyExcludedRight = "control u j ] enter"



const general_combos = [
  {
    "keys": "`",
    "on_keydown": function () { interpretKeypress('general', '`') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "\\",
    "on_keydown": function () { interpretKeypress('general', '\\') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "control z",
    "on_keydown": function () { interpretKeypress('general', 'ctrl-z') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "control x",
    "on_keydown": function () { interpretKeypress('general', 'ctrl-x') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "control c",
    "on_keydown": function () { interpretKeypress('general', 'ctrl-c') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "control a",
    "on_keydown": function () { interpretKeypress('general', 'ctrl-a') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "control s",
    "on_keydown": function () { interpretKeypress('general', 'ctrl-s') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },


  {
    "keys": "control /",
    "on_keydown": function () { interpretKeypress('general', 'ctrl-/') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "control '",
    "on_keydown": function () { interpretKeypress('general', "ctrl-'") },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "control ;",
    "on_keydown": function () { interpretKeypress('general', 'ctrl-;') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  // {
  //   "keys": "control l",
  //   "on_keydown": function () { interpretKeypress('general', 'ctrl-l') },
  //   "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  // },
  // {
  //   "keys": "control j",
  //   "on_keydown": function () { interpretKeypress('general', 'ctrl-k') },
  //   "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  // },


  {
    "keys": "control space",
    "on_keydown": function () { interpretKeypress('general', 'ctrl-space') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },


]


// LH  *************************************************************************************************
const LH_keys = [
  {
    "keys": "space",
    "on_keydown": function () { interpretKeypress('left', 'space') },
    "on_keyup": function () { interpretKeypress('left-up', 'space') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  // {
  //   "keys": "tab",
  //   "on_keydown": function () { interpretKeypress('left', 'tab') },
  //   "on_keyup": function () { interpretKeypress('left-up', 'tab') },
  //   "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  // },
  // {
  //   "keys": "1",
  //   "on_keydown": function () { interpretKeypress('left', '1') },
  //   "on_keyup": function () { interpretKeypress('left-up', '1') },
  //   "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  // },
  {
    "keys": "2",
    "on_keydown": function () { interpretKeypress('left', '2') },
    "on_keyup": function () { interpretKeypress('left-up', '2') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  {
    "keys": "3",
    "on_keydown": function () { interpretKeypress('left', '3') },
    "on_keyup": function () { interpretKeypress('left-up', '3') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  {
    "keys": "4",
    "on_keydown": function () { interpretKeypress('left', '4') },
    "on_keyup": function () { interpretKeypress('left-up', '4') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  {
    "keys": "5",
    "on_keydown": function () { interpretKeypress('left', '5') },
    "on_keyup": function () { interpretKeypress('left-up', '5') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  // {
  //   "keys": "6",
  //   "on_keydown": function () { interpretKeypress('left', '6') },
  //   "on_keyup": function () { interpretKeypress('left-up', '6') },
  //   "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  // },
  {
    "keys": "q",
    "on_keydown": function () { interpretKeypress('left', 'q') },
    "on_keyup": function () { interpretKeypress('left-up', 'q') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  {
    "keys": "w",
    "on_keydown": function () { interpretKeypress('left', 'w') },
    "on_keyup": function () { interpretKeypress('left-up', 'w') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  {
    "keys": "e",
    "on_keydown": function () { interpretKeypress('left', 'e') },
    "on_keyup": function () { interpretKeypress('left-up', 'e') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  {
    "keys": "r",
    "on_keydown": function () { interpretKeypress('left', 'r') },
    "on_keyup": function () { interpretKeypress('left-up', 'r') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  // {
  //   "keys": "t",
  //   "on_keydown": function () { interpretKeypress('left', 't') },
  //   "on_keyup": function () { interpretKeypress('left-up', 't') },
  //   "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  // },
  {
    "keys": "a",
    "on_keydown": function () { interpretKeypress('left', 'a') },
    "on_keyup": function () { interpretKeypress('left-up', 'a') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  {
    "keys": "s",
    "on_keydown": function () { interpretKeypress('left', 's') },
    "on_keyup": function () { interpretKeypress('left-up', 's') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  {
    "keys": "d",
    "on_keydown": function () { interpretKeypress('left', 'd') },
    "on_keyup": function () { interpretKeypress('left-up', 'd') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  {
    "keys": "f",
    "on_keydown": function () { interpretKeypress('left', 'f') },
    "on_keyup": function () { interpretKeypress('left-up', 'f') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  // {
  //   "keys": "g",
  //   "on_keydown": function () { interpretKeypress('left', 'g') },
  //   "on_keyup": function () { interpretKeypress('left-up', 'g') },
  //   "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  // },
  {
    "keys": "z",
    "on_keydown": function () { interpretKeypress('left', 'z') },
    "on_keyup": function () { interpretKeypress('left-up', 'z') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  {
    "keys": "x",
    "on_keydown": function () { interpretKeypress('left', 'x') },
    "on_keyup": function () { interpretKeypress('left-up', 'x') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  {
    "keys": "c",
    "on_keydown": function () { interpretKeypress('left', 'c') },
    "on_keyup": function () { interpretKeypress('left-up', 'c') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  {
    "keys": "v",
    "on_keydown": function () { interpretKeypress('left', 'v') },
    "on_keyup": function () { interpretKeypress('left-up', 'v') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  {
    "keys": "b",
    "on_keydown": function () { interpretKeypress('left', 'b') },
    "on_keyup": function () { interpretKeypress('left-up', 'b') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },

  // DOUBLES
  {
    "keys": "1 2",
    "on_keydown": function () { interpretKeypress('left', '12') },
    "on_keyup": function () { interpretKeypress('left-up', '12') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "1 3",
    "on_keydown": function () { interpretKeypress('left', '13') },
    "on_keyup": function () { interpretKeypress('left-up', '13') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "1 4",
    "on_keydown": function () { interpretKeypress('left', '14') },
    "on_keyup": function () { interpretKeypress('left-up', '14') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "1 5",
    "on_keydown": function () { interpretKeypress('left', '15') },
    "on_keyup": function () { interpretKeypress('left-up', '15') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "6 2",
    "on_keydown": function () { interpretKeypress('left', '62') },
    "on_keyup": function () { interpretKeypress('left-up', '62') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "6 3",
    "on_keydown": function () { interpretKeypress('left', '63') },
    "on_keyup": function () { interpretKeypress('left-up', '63') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "6 4",
    "on_keydown": function () { interpretKeypress('left', '64') },
    "on_keyup": function () { interpretKeypress('left-up', '64') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "6 5",
    "on_keydown": function () { interpretKeypress('left', '65') },
    "on_keyup": function () { interpretKeypress('left-up', '65') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },

  {
    "keys": "tab 2",
    "on_keydown": function () { interpretKeypress('left', 'tab2') },
    "on_keyup": function () { interpretKeypress('left-up', 'tab2') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "tab 3",
    "on_keydown": function () { interpretKeypress('left', 'tab3') },
    "on_keyup": function () { interpretKeypress('left-up', 'tab3') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "tab 4",
    "on_keydown": function () { interpretKeypress('left', 'tab4') },
    "on_keyup": function () { interpretKeypress('left-up', 'tab4') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "tab 5",
    "on_keydown": function () { interpretKeypress('left', 'tab5') },
    "on_keyup": function () { interpretKeypress('left-up', 'tab5') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "tab q",
    "on_keydown": function () { interpretKeypress('left', 'tabq') },
    "on_keyup": function () { interpretKeypress('left-up', 'tabq') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "tab w",
    "on_keydown": function () { interpretKeypress('left', 'tabw') },
    "on_keyup": function () { interpretKeypress('left-up', 'tabw') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "tab e",
    "on_keydown": function () { interpretKeypress('left', 'tabe') },
    "on_keyup": function () { interpretKeypress('left-up', 'tabe') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "tab r",
    "on_keydown": function () { interpretKeypress('left', 'tabr') },
    "on_keyup": function () { interpretKeypress('left-up', 'tabr') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "tab a",
    "on_keydown": function () { interpretKeypress('left', 'taba') },
    "on_keyup": function () { interpretKeypress('left-up', 'taba') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "tab s",
    "on_keydown": function () { interpretKeypress('left', 'tabs') },
    "on_keyup": function () { interpretKeypress('left-up', 'tabs') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "tab d",
    "on_keydown": function () { interpretKeypress('left', 'tabd') },
    "on_keyup": function () { interpretKeypress('left-up', 'tabd') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "tab f",
    "on_keydown": function () { interpretKeypress('left', 'tabf') },
    "on_keyup": function () { interpretKeypress('left-up', 'tabf') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },

  {
    "keys": "t q",
    "on_keydown": function () { interpretKeypress('left', 'tq') },
    "on_keyup": function () { interpretKeypress('left-up', 'tq') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "t w",
    "on_keydown": function () { interpretKeypress('left', 'tw') },
    "on_keyup": function () { interpretKeypress('left-up', 'tw') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "t e",
    "on_keydown": function () { interpretKeypress('left', 'te') },
    "on_keyup": function () { interpretKeypress('left-up', 'te') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "t r",
    "on_keydown": function () { interpretKeypress('left', 'tr') },
    "on_keyup": function () { interpretKeypress('left-up', 'tr') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "g a",
    "on_keydown": function () { interpretKeypress('left', 'ga') },
    "on_keyup": function () { interpretKeypress('left-up', 'ga') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "g s",
    "on_keydown": function () { interpretKeypress('left', 'gs') },
    "on_keyup": function () { interpretKeypress('left-up', 'gs') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "g d",
    "on_keydown": function () { interpretKeypress('left', 'gd') },
    "on_keyup": function () { interpretKeypress('left-up', 'gd') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "g f",
    "on_keydown": function () { interpretKeypress('left', 'gf') },
    "on_keyup": function () { interpretKeypress('left-up', 'gf') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },

  // SHIFTED
  {
    "keys": "shift @",  // does not lowercase symbol
    "on_keydown": function () { interpretKeypress('left-shifted', '2') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift #",  // does not lowercase symbol
    "on_keydown": function () { interpretKeypress('left-shifted', '3') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift $",  // does not lowercase symbol
    "on_keydown": function () { interpretKeypress('left-shifted', '4') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift %",  // does not lowercase symbol
    "on_keydown": function () { interpretKeypress('left-shifted', '5') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift q",
    "on_keydown": function () { interpretKeypress('left-shifted', 'q') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift w",
    "on_keydown": function () { interpretKeypress('left-shifted', 'w') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift e",
    "on_keydown": function () { interpretKeypress('left-shifted', 'e') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift r",
    "on_keydown": function () { interpretKeypress('left-shifted', 'r') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift a",
    "on_keydown": function () { interpretKeypress('left-shifted', 'a') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift s",
    "on_keydown": function () { interpretKeypress('left-shifted', 's') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift d",
    "on_keydown": function () { interpretKeypress('left-shifted', 'd') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift f",
    "on_keydown": function () { interpretKeypress('left-shifted', 'f') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift z",
    "on_keydown": function () { interpretKeypress('left-shifted', 'z') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift x",
    "on_keydown": function () { interpretKeypress('left-shifted', 'x') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift c",
    "on_keydown": function () { interpretKeypress('left-shifted', 'c') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift v",
    "on_keydown": function () { interpretKeypress('left-shifted', 'v') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift b",
    "on_keydown": function () { interpretKeypress('left-shifted', 'b') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },

  // SHIFTED DOUBLES
  {
    "keys": "shift tab q",
    "on_keydown": function () { interpretKeypress('left-shifted', 'tabq') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift tab w",
    "on_keydown": function () { interpretKeypress('left-shifted', 'tabw') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift tab e",
    "on_keydown": function () { interpretKeypress('left-shifted', 'tabe') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift tab r",
    "on_keydown": function () { interpretKeypress('left-shifted', 'tabr') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift tab a",
    "on_keydown": function () { interpretKeypress('left-shifted', 'taba') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift tab s",
    "on_keydown": function () { interpretKeypress('left-shifted', 'tabs') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift tab d",
    "on_keydown": function () { interpretKeypress('left-shifted', 'tabd') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift tab f",
    "on_keydown": function () { interpretKeypress('left-shifted', 'tabf') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },

  {
    "keys": "shift t q",
    "on_keydown": function () { interpretKeypress('left-shifted', 'tw') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift t w",
    "on_keydown": function () { interpretKeypress('left-shifted', 'tw') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift t e",
    "on_keydown": function () { interpretKeypress('left-shifted', 'te') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift t r",
    "on_keydown": function () { interpretKeypress('left-shifted', 'tr') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift g a",
    "on_keydown": function () { interpretKeypress('left-shifted', 'ga') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift g s",
    "on_keydown": function () { interpretKeypress('left-shifted', 'gs') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift g d",
    "on_keydown": function () { interpretKeypress('left-shifted', 'gd') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift g f",
    "on_keydown": function () { interpretKeypress('left-shifted', 'gf') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  }

]

// RH  *************************************************************************************************
const RH_keys = [

  {
    "keys": "space",
    "on_keydown": function () { interpretKeypress('right', 'space') },
    "on_keyup": function () { interpretKeypress('right-up', 'space') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  // {
  //   "keys": "8",
  //   "on_keydown": function () { interpretKeypress('right', '8') },
  //   "on_keyup": function () { interpretKeypress('right-up', '8') },
  //   "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  // },
  {
    "keys": "9",
    "on_keydown": function () { interpretKeypress('right', '9') },
    "on_keyup": function () { interpretKeypress('right-up', '9') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  {
    "keys": "0",
    "on_keydown": function () { interpretKeypress('right', '0') },
    "on_keyup": function () { interpretKeypress('right-up', '0') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  {
    "keys": "-",
    "on_keydown": function () { interpretKeypress('right', '-') },
    "on_keyup": function () { interpretKeypress('right-up', '-') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  {
    "keys": "=",
    "on_keydown": function () { interpretKeypress('right', '=') },
    "on_keyup": function () { interpretKeypress('right-up', '=') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  // {
  //   "keys": "u",
  //   "on_keydown": function () { interpretKeypress('right', 'u') },
  //   "on_keyup": function () { interpretKeypress('right-up', 'u') },
  //   "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  // },
  {
    "keys": "i",
    "on_keydown": function () { interpretKeypress('right', 'i') },
    "on_keyup": function () { interpretKeypress('right-up', 'i') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  {
    "keys": "o",
    "on_keydown": function () { interpretKeypress('right', 'o') },
    "on_keyup": function () { interpretKeypress('right-up', 'o') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  {
    "keys": "p",
    "on_keydown": function () { interpretKeypress('right', 'p') },
    "on_keyup": function () { interpretKeypress('right-up', 'p') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  {
    "keys": "[",
    "on_keydown": function () { interpretKeypress('right', '[') },
    "on_keyup": function () { interpretKeypress('right-up', '[') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  // {
  //   "keys": "j",
  //   "on_keydown": function () { interpretKeypress('right', 'j') },
  //   "on_keyup": function () { interpretKeypress('right-up', 'j') },
  //   "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  // },
  {
    "keys": "k",
    "on_keydown": function () { interpretKeypress('right', 'k') },
    "on_keyup": function () { interpretKeypress('right-up', 'k') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  {
    "keys": "l",
    "on_keydown": function () { interpretKeypress('right', 'l') },
    "on_keyup": function () { interpretKeypress('right-up', 'l') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  {
    "keys": ";",
    "on_keydown": function () { interpretKeypress('right', ';') },
    "on_keyup": function () { interpretKeypress('right-up', ';') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  {
    "keys": "'",
    "on_keydown": function () { interpretKeypress('right', "'") },
    "on_keyup": function () { interpretKeypress('right-up', "'") },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  {
    "keys": "n",
    "on_keydown": function () { interpretKeypress('right', 'n') },
    "on_keyup": function () { interpretKeypress('right-up', 'n') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  {
    "keys": "m",
    "on_keydown": function () { interpretKeypress('right', 'm') },
    "on_keyup": function () { interpretKeypress('right-up', 'm') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  {
    "keys": ",",
    "on_keydown": function () { interpretKeypress('right', ',') },
    "on_keyup": function () { interpretKeypress('right-up', ',') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },

  {
    "keys": ".",
    "on_keydown": function () { interpretKeypress('right', '.') },
    "on_keyup": function () { interpretKeypress('right-up', '.') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  {
    "keys": "/",
    "on_keydown": function () { interpretKeypress('right', '/') },
    "on_keyup": function () { interpretKeypress('right-up', '/') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  {
    "keys": "?",
    "on_keydown": function () { interpretKeypress('right', '?') },
    "on_keyup": function () { interpretKeypress('right-up', '?') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },

  // DOUBLES
  {
    "keys": "8 9",
    "on_keydown": function () { interpretKeypress('right', '89') },
    "on_keyup": function () { interpretKeypress('right-up', '89') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "8 0",
    "on_keydown": function () { interpretKeypress('right', '80') },
    "on_keyup": function () { interpretKeypress('right-up', '80') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "8 -",
    "on_keydown": function () { interpretKeypress('right', '8-') },
    "on_keyup": function () { interpretKeypress('right-up', '8-') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "8 =",
    "on_keydown": function () { interpretKeypress('right', '8=') },
    "on_keyup": function () { interpretKeypress('right-up', '8=') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "backspace 9",
    "on_keydown": function () { interpretKeypress('right', 'back9') },
    "on_keyup": function () { interpretKeypress('right-up', 'back9') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "backspace 0",
    "on_keydown": function () { interpretKeypress('right', 'back0') },
    "on_keyup": function () { interpretKeypress('right-up', 'back0') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "backspace -",
    "on_keydown": function () { interpretKeypress('right', 'back-') },
    "on_keyup": function () { interpretKeypress('right-up', 'back-') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "backspace =",
    "on_keydown": function () { interpretKeypress('right', 'back=') },
    "on_keyup": function () { interpretKeypress('right-up', 'back=') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },

  {
    "keys": "u i",
    "on_keydown": function () { interpretKeypress('right', 'ui') },
    "on_keyup": function () { interpretKeypress('right-up', 'ui') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "u o",
    "on_keydown": function () { interpretKeypress('right', 'uo') },
    "on_keyup": function () { interpretKeypress('right-up', 'uo') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "u p",
    "on_keydown": function () { interpretKeypress('right', 'up') },
    "on_keyup": function () { interpretKeypress('right-up', 'up') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "u [",
    "on_keydown": function () { interpretKeypress('right', 'u[') },
    "on_keyup": function () { interpretKeypress('right-up', 'u[') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "j k",
    "on_keydown": function () { interpretKeypress('right', 'jk') },
    "on_keyup": function () { interpretKeypress('right-up', 'jk') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "j l",
    "on_keydown": function () { interpretKeypress('right', 'jl') },
    "on_keyup": function () { interpretKeypress('right-up', 'jl') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "j ;",
    "on_keydown": function () { interpretKeypress('right', 'j;') },
    "on_keyup": function () { interpretKeypress('right-up', 'j;') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "j '",
    "on_keydown": function () { interpretKeypress('right', "j'") },
    "on_keyup": function () { interpretKeypress('right-up', "j'") },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },

  {
    "keys": "] 9",
    "on_keydown": function () { interpretKeypress('right', ']9') },
    "on_keyup": function () { interpretKeypress('right-up', ']9') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "] 0",
    "on_keydown": function () { interpretKeypress('right', ']0') },
    "on_keyup": function () { interpretKeypress('right-up', ']0') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "] -",
    "on_keydown": function () { interpretKeypress('right', ']-') },
    "on_keyup": function () { interpretKeypress('right-up', ']-') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "] =",
    "on_keydown": function () { interpretKeypress('right', ']=') },
    "on_keyup": function () { interpretKeypress('right-up', ']=') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "] i",
    "on_keydown": function () { interpretKeypress('right', ']i') },
    "on_keyup": function () { interpretKeypress('right-up', ']i') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "] o",
    "on_keydown": function () { interpretKeypress('right', ']o') },
    "on_keyup": function () { interpretKeypress('right-up', ']o') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "] p",
    "on_keydown": function () { interpretKeypress('right', ']p') },
    "on_keyup": function () { interpretKeypress('right-up', ']p') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "] [",
    "on_keydown": function () { interpretKeypress('right', '][') },
    "on_keyup": function () { interpretKeypress('right-up', '][') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "enter k",
    "on_keydown": function () { interpretKeypress('right', "enterk") },
    "on_keyup": function () { interpretKeypress('right-up', "enterk") },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "enter l",
    "on_keydown": function () { interpretKeypress('right', "enterl") },
    "on_keyup": function () { interpretKeypress('right-up', "enterl") },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "enter ;",
    "on_keydown": function () { interpretKeypress('right', "enter;") },
    "on_keyup": function () { interpretKeypress('right-up', "enter;") },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "enter '",
    "on_keydown": function () { interpretKeypress('right', "enter'") },
    "on_keyup": function () { interpretKeypress('right-up', "enter'") },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },

  // SHIFTED
  {
    "keys": "shift (",  // does not lowercase symbol
    "on_keydown": function () { interpretKeypress('right-shifted', '9') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },
  {
    "keys": "shift )",  // does not lowercase symbol
    "on_keydown": function () { interpretKeypress('right-shifted', '0') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },
  {
    "keys": "shift _",  // does not lowercase symbol
    "on_keydown": function () { interpretKeypress('right-shifted', '-') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },
  {
    "keys": "shift +",  // does not lowercase symbol
    "on_keydown": function () { interpretKeypress('right-shifted', '=') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },
  {
    "keys": "shift i",
    "on_keydown": function () { interpretKeypress('right-shifted', 'i') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },
  {
    "keys": "shift o",
    "on_keydown": function () { interpretKeypress('right-shifted', 'o') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },
  {
    "keys": "shift p",
    "on_keydown": function () { interpretKeypress('right-shifted', 'p') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },
  {
    "keys": "shift {",  // does not lowercase symbol
    "on_keydown": function () { interpretKeypress('right-shifted', '[') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },
  {
    "keys": "shift k",
    "on_keydown": function () { interpretKeypress('right-shifted', 'k') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },
  {
    "keys": "shift l",
    "on_keydown": function () { interpretKeypress('right-shifted', 'l') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },
  {
    "keys": "shift :",  // does not lowercase symbol
    "on_keydown": function () { interpretKeypress('right-shifted', ';') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },
  {
    "keys": 'shift "',  // does not lowercase symbol
    "on_keydown": function () { interpretKeypress('right-shifted', "'") },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },
  {
    "keys": "shift n",
    "on_keydown": function () { interpretKeypress('right-shifted', 'n') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },
  {
    "keys": "shift <",  // does not lowercase symbol
    "on_keydown": function () { interpretKeypress('right-shifted', ',') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },
  {
    "keys": "shift >",  // does not lowercase symbol
    "on_keydown": function () { interpretKeypress('right-shifted', '.') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },
  {
    "keys": "shift ?",  // does not lowercase symbol
    "on_keydown": function () { interpretKeypress('right-shifted', '/') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },

  // SHIFTED DOUBLES
  {
    "keys": "shift } i",  // does not lowercase symbol
    "on_keydown": function () { interpretKeypress('right-shifted', 'iu') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift } o",  // does not lowercase symbol
    "on_keydown": function () { interpretKeypress('right-shifted', ']o') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift } p",  // does not lowercase symbol
    "on_keydown": function () { interpretKeypress('right-shifted', ']p') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift } {",  // does not lowercase symbol
    "on_keydown": function () { interpretKeypress('right-shifted', '][') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift enter k",
    "on_keydown": function () { interpretKeypress('right-shifted', "enter k") },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift enter l",
    "on_keydown": function () { interpretKeypress('right-shifted', "enter l") },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift enter :",  // does not lowercase symbol
    "on_keydown": function () { interpretKeypress('right-shifted', "enter ;") },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": 'shift enter "',  // does not lowercase symbol
    "on_keydown": function () { interpretKeypress('right-shifted', "enter '") },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  }
]
