
// View ****************************************************************************

const view = (function() {
  const leftHandView = $('#left-hand')
  const rightHandView = $('#right-hand')

  let pitches1View = null, pitches2View = null,
      params1View = null, params2View = null

  const buildNoteView = function(note) {
    return "<div class='current-note'>"  + note + "</div>"
  }

  const buildSoundParamsView = function(param, value) {
    return $([
      "<div class='sound-params'>",
      "  <div class='editing-param'>" + param + "</div>",
      "  <div class='param-value'>" + value + "</div>",
      "</div>"
    ].join("\n"));
  }


  const updatePitches1View = function() {
    console.log('changing pitch1 view...', model.state.synth1.pitch)
    pitches1View.html(buildNoteView(model.state.synth1.pitch))
  }

  const updatePitches2View = function() {
    console.log('changing pitch2 view...', model.state.synth2.pitch)
    pitches2View.html(buildNoteView(model.state.synth2.pitch))
  }

  const updateParams1View = function() {
    console.log('updating params1 view')
    const editingParam = model.state.synth1.editingParam
    const params = model.state.synth1.params
    params1View.html(buildSoundParamsView(editingParam, params[editingParam]))
  }

  const updateParams2View = function() {
    console.log('updating params2 view')
    const editingParam = model.state.synth2.editingParam
    const params = model.state.synth2.params
    params2View.html(buildSoundParamsView(editingParam, params[editingParam]))
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


