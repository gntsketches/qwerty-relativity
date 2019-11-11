
// View ****************************************************************************

const view = (function() {
  const leftHandView = $('#left-hand')
  const rightHandView = $('#right-hand')

  let pitches1View = null, pitches2View = null,
      params1View = null, params2View = null

  const buildPitchView = function(synth) {
    const pitch = model.state[synth].pitch

    return $([
      // "<div class='pitch-display'>",
      "  <div class='which-synth'>" + synth + "</div>",
      "  <div class='pitch'>" + pitch + "</div>",
      // "</div>"
    ].join("\n"));
  }

  const buildSoundParamsView = function(synth) {
    const editingParam = model.state[synth].editingParam
    const params = model.state[synth].params
    const value =  params[editingParam]

    return $([
      // "<div class='params-display'>",
      "  <div class='which-synth'>" + synth + "</div>",
      "  <div class='param-container'>",
      "    <span class='editing-param'>" + editingParam + ": </span>",
      "    <span class='param-value'>" + value + "</span>",
      "  </div>"
      // "</div>"
    ].join("\n"));
  }


  const updatePitches1View = function() {
    console.log('changing pitch1 view...', model.state.synth1.pitch)
    pitches1View.html(buildPitchView('synth1'))
  }

  const updatePitches2View = function() {
    console.log('changing pitch2 view...', model.state.synth2.pitch)
    pitches2View.html(buildPitchView('synth2'))
  }

  const updateParams1View = function() {
    console.log('updating params1 view')
    params1View.html(buildSoundParamsView('synth1'))
  }

  const updateParams2View = function() {
    console.log('updating params2 view')
    params2View.html(buildSoundParamsView('synth2'))
  }


  const initView = function() {
    console.log('initializing view')
    // note that refs to lh and rh views will still be there even when not 'displayed'
    // I think this won't be a problem because the controller is only ever modifying what is 'displayed'
    switch (model.state.leftHand) {
      case 'synth1':
        pitches1View = leftHandView
        updatePitches1View()
        break
      case 'synth2':
        pitches2View = leftHandView
        updatePitches2View()
        break
      case 'params1':
        params1View = leftHandView
        updateParams1View()
        break
      case 'params2':
        params2View = leftHandView
        updateParams2View()
        break
    }
    switch (model.state.rightHand) {
      case 'synth1':
        pitches1View = rightHandView
        updatePitches1View()
        break
      case 'synth2':
        pitches2View = rightHandView
        updatePitches2View()
        break
      case 'params1':
        params1View = rightHandView
        updateParams1View()
        break
      case 'params2':
        params2View = rightHandView
        updateParams2View()
        break
    }

  }


  pubSub.subscribe('swapHands', initView)
  pubSub.subscribe('basePitch1Changed', updatePitches1View)
  pubSub.subscribe('basePitch2Changed', updatePitches2View)
  pubSub.subscribe('params1Changed', updateParams1View)
  pubSub.subscribe('params2Changed', updateParams2View)


  return {
    initView: initView,
  }

})()

console.log('view', view)


