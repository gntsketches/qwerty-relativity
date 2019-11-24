
// "Controller" ***************************************************************************

const interpretKeypress = function(zone, pressed) {
  // console.log('pressed', pressed)
  const spacebar = model.state.spacebar
  const leftHand = model.state.leftHand
  const rightHand = model.state.rightHand

  switch(zone) {


    case 'general':
      generalDispatch[pressed]()
      break


    case 'left':
      if (pressed==='space' && spacebar==='right') { return }
      console.log('left')

      if (leftHand==='synth1') {
        if (model.state.synth1.sustain === 'Hold' &&
           (pressed==='space' || pressed==='z')) {
          model.toggleHolding('synth1')
        } else {
          model.setBasePitch('synth1', constants.LH_pitch_keys[pressed])
          audio.playSynth1()
        }
      } else if (leftHand==='synth2') {
        if (model.state.synth2.sustain === 'Hold') {
          model.toggleHolding('synth2')
        } else {
          model.setBasePitch('synth2', constants.LH_pitch_keys[pressed])
          audio.playSynth2()
        }
      } else if (leftHand==='params1') {
        model.updateParamFromKey('synth1', pressed)
      } else if (leftHand==='params2') {
        model.updateParamFromKey('synth2', pressed)
      }
      break

    case 'left-up':
      if (pressed==='space' && spacebar==='right') { return }
      console.log('left-up')

      if (leftHand==='synth1') {
        if (model.state.synth1.sustain === 'Press') {
          model.setBasePitch('synth1', constants.LH_pitch_keys[pressed])
          audio.stopSynth1()
        }
      } else if (leftHand === 'synth2') {
        if (model.state.synth2.sustain === 'Pluck' ||
          model.state.synth2.sustain === 'Hold') { return }
        model.setBasePitch('synth2', constants.LH_pitch_keys[pressed])
        audio.stopSynth2()
      }
      break


    case 'left-shifted':
      if (leftHand==='synth1') {
        model.setBasePitch('synth1', constants.LH_pitch_keys[pressed])
      } else if (leftHand==='synth2') {
        model.setBasePitch('synth2', constants.LH_pitch_keys[pressed])
      } else {
        // do something special?
      }
      break


    case 'right':
      if (pressed==='space' && spacebar==='left') { return }
      console.log('right')

      if (rightHand==='synth1') {
        model.setBasePitch('synth1', constants.RH_pitch_keys[pressed])
        audio.playSynth1()
      } else if (rightHand==='synth2') {
        model.setBasePitch('synth2', constants.RH_pitch_keys[pressed])
        audio.playSynth2()
      } else if (rightHand==='params1') {
        model.updateParamFromKey('synth1', pressed)
      } else if (rightHand==='params2') {
        model.updateParamFromKey('synth2', pressed)
      }
      break


    case 'right-shifted':
      if (rightHand==='synth1') {
        model.setBasePitch('synth1', constants.RH_pitch_keys[pressed])
      } else if (rightHand==='synth2') {
        model.setBasePitch('synth2', constants.RH_pitch_keys[pressed])
      } else {
        // do something special?
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


const generalDispatch = {

  'ctrl-z': function() { model.swapHands() },
  'ctrl-a': function() { model.setLeftHand('synth1') },
  'ctrl-s': function() { model.setLeftHand('synth2') },
  'ctrl-d': function() { model.setLeftHand('params1') },
  'ctrl-f': function() { model.setLeftHand('params2') },

  'ctrl-/': function() { model.swapHands() },
  "ctrl-'": function() { model.setRightHand('synth1') },
  'ctrl-;': function() { model.setRightHand('synth2') },
  'ctrl-l': function() { model.setRightHand('params1') },
  'ctrl-k': function() { model.setRightHand('params2') },
}
