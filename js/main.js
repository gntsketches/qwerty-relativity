
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
      // if (model.state.leftHand==='synthOnePitches') {
      //   if (pressed==='space' && model.state.spacebar==='right') { return }
        model.setRoot(constants.LH_pitch_keys[pressed])
        audio.play()
      } else {
      // } else if (model.state.leftHand==='SynthOneParams' {
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
