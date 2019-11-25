
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
      console.log('left', pressed)

      if (leftHand==='synth1' || leftHand==='synth2') {
        synthPressedResponse('left', leftHand, pressed)

      } else if (leftHand==='params1') {
        model.updateParamFromKey('synth1', pressed)
      } else if (leftHand==='params2') {
        model.updateParamFromKey('synth2', pressed)
      }
      break

    case 'left-up':
      if (pressed==='space' && spacebar==='right') { return }
      console.log('left-up')
      if (leftHand==='synth1' &&
          model.state.synth1.sustain==='Press' &&
          model.state.synth1.pressed===pressed
      ) {
          audio.stopSynth1()
      } else if (leftHand === 'synth2' &&
          model.state.synth2.sustain==='Press' &&
          model.state.synth2.pressed===pressed
      ) {
          audio.stopSynth2()
      }
      break

    case 'left-shifted':
      if (leftHand==='synth1') {
        model.setPitchAndPressed('left', 'synth1', pressed)
      } else if (leftHand==='synth2') {
        model.setPitchAndPressed('left', 'synth2', pressed)
      } else {
        // do something special?
      }
      break


    case 'right':
      if (pressed==='space' && spacebar==='left') { return }
      console.log('right')


      if (rightHand==='synth1' || rightHand==='synth2') {
        synthPressedResponse('right', rightHand, pressed)

      } else if (rightHand==='params1') {
        model.updateParamFromKey('synth1', pressed)
      } else if (rightHand==='params2') {
        model.updateParamFromKey('synth2', pressed)
      }
      break

    case 'right-up':
      if (pressed==='space' && spacebar==='left') { return }
      console.log('right-up')
      if (rightHand==='synth1' &&
        model.state.synth1.sustain==='Press' &&
        model.state.synth1.pressed===pressed
      ) {
        audio.stopSynth1()
      } else if (rightHand === 'synth2' &&
        model.state.synth2.sustain==='Press' &&
        model.state.synth2.pressed===pressed
      ) {
        audio.stopSynth2()
      }
      break

    case 'right-shifted':
      if (rightHand==='synth1') {
        model.setPitchAndPressed('right', 'synth1', pressed)
      } else if (rightHand==='synth2') {
        model.setPitchAndPressed('right', 'synth2', pressed)
      } else {
        // do something special?
      }
      break


  }
}


// Interpretation Functions *****************************************************

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


function synthPressedResponse(hand, synthNum, pressed) {

  if (model.state[synthNum].sustain === 'Hold') {
        if (pressed==='space' || pressed==='z' || pressed==='/') {
          model.toggleHolding(synthNum)
    } else if (model.state[synthNum].holding===false) {
      model.setPitchAndPressed(hand, synthNum, pressed)
      model.toggleHolding(synthNum)
    } else {
      model.setPitchAndPressed(hand, synthNum, pressed)
      if (synthNum==='synth1') { audio.playSynth1() }
      else if (synthNum==='synth2') { audio.playSynth2() }
    }
  } else {
    model.setPitchAndPressed(hand, synthNum, pressed)
    if (synthNum==='synth1') { audio.playSynth1() }
    else if (synthNum==='synth2') { audio.playSynth2() }
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

