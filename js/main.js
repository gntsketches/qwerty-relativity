
// "Controller" ***************************************************************************

const interpretKeypress = function(zone, pressed) {
  console.log('pressed', pressed)
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
      } else if (leftHand==='params1') {
        model.updateParamFromKey('synth1', pressed, true)
      } else if (leftHand==='params2') {
        model.updateParamFromKey('synth2', pressed, true )
      }
      break


    case 'right':
      console.log('right')
      if (pressed==='space' && spacebar==='left') { return }

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
      console.log('right-shifted')
      if (rightHand==='synth1') {
        model.setPitchAndPressed('right', 'synth1', pressed)
      } else if (rightHand==='synth2') {
        model.setPitchAndPressed('right', 'synth2', pressed)
      } else if (rightHand==='params1') {
        model.updateParamFromKey('synth1', pressed, true)
      } else if (rightHand==='params2') {
        model.updateParamFromKey('synth2', pressed, true )
      }
      break

  }
}


// Interpretation Functions *****************************************************

const generalDispatch = {

  '`'     : function() { model.changeSustainMode('leftHand') },
  '\\'  : function() { model.changeSustainMode('rightHand') },

  'ctrl-z': function() { model.swapHands() },
  'ctrl-x': function() { model.changeSynthWave('synth1') },
  'ctrl-c': function() { model.changeSynthWave('synth2') },
  'ctrl-a': function() { model.toggleSynth('leftHand') },
  'ctrl-s': function() { model.toggleParams('leftHand') },

  'ctrl-/': function() { model.swapHands() },
  "ctrl-'": function() { model.toggleSynth('rightHand') },
  'ctrl-;': function() { model.toggleParams('rightHand') },

  'ctrl-space': function() { model.toggleSpaceBar() },
}


function synthPressedResponse(hand, synthNum, pressed) {

  if (model.state[synthNum].sustain === 'Hold') {
        if (constants.LH_pitch_keys[pressed]==='cur' || constants.RH_pitch_keys[pressed]==='cur') {
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

