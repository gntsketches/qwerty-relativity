
// View ****************************************************************************

const view = (function() {
  const leftHandDOM = $('#left-hand')
  const rightHandDOM = $('#right-hand')
  let pitch1DOM = null
  let pitch2DOM = null

  const buildPitchView = function(synth) {
    const pitch = model.state[synth].pitch

    return $([
      "<div class='" + synth + "-display'>",
      "  <div class='which-synth'>" + synth + "</div>",
      "  <div class='" + synth + "-pitch'>" + pitch + "</div>",
      "</div>"
    ].join("\n"));
  }

  const buildParamsView = function(synth) {
    const editingParam = model.state[synth].editingParam
    const params = model.state[synth].params
    const value =  params[editingParam]

    return $([
      "<div class='" + synth + "-display'>",
      "  <div class='which-synth'>" + synth + "</div>",
      "  <div class='param-container'>",
      "    <span class='editing-param'>" + editingParam + ": </span>",
      "    <span class='param-value'>" + value + "</span>",
      "  </div>",
      "</div>"
    ].join("\n"));
  }

  const setLeftHandView = function() {
    switch (model.state.leftHand) {
      case 'synth1':
        leftHandDOM.html(buildPitchView('synth1'))
        break
      case 'synth2':
        leftHandDOM.html(buildPitchView('synth2'))
        break
      case 'params1':
        leftHandDOM.html(buildParamsView('synth1')) // this is confusing. params and synth mean 2 different things here
        break
      case 'params2':
        leftHandDOM.html(buildParamsView('synth2'))
        break
    }

  };

  const setRightHandView = function() {
    switch (model.state.rightHand) {
      case 'synth1':
        rightHandDOM.html(buildPitchView('synth1'))
        break
      case 'synth2':
        rightHandDOM.html(buildPitchView('synth2'))
        break
      case 'params1':
        rightHandDOM.html(buildParamsView('synth1'))
        break
      case 'params2':
        rightHandDOM.html(buildParamsView('synth2'))
        break
    }

  };
  const updatePitches1View = function() {
    console.log('changing pitch1 view...', model.state.synth1.pitch)
    $.each(pitch1DOM, function(i, v) {
      console.log('v', v)
      $(v).html(model.state.synth1.pitch)
      console.log('v.html', v.html)
    })
  }

  const updatePitches2View = function() {
    console.log('changing pitch2 view...', model.state.synth2.pitch)
    $.each(pitch2DOM, function(i, v) {
      $(v).html(model.state.synth2.pitch)
    })
  }

  const initView = function() {
    console.log('initializing view')
    setLeftHandView()
    setRightHandView()

    pitch1DOM = $('.synth1-pitch')
    pitch2DOM = $('.synth2-pitch')
    console.log('pitch1DOM', pitch1DOM)
    console.log('pitch2DOM', pitch2DOM)

  }

  pubSub.subscribe('swapHands', initView)
  pubSub.subscribe('basePitch1Changed', updatePitches1View)
  pubSub.subscribe('basePitch2Changed', updatePitches2View)
  // build subscribers for each param change, as with pitches
  pubSub.subscribe('params1Changed', initView)
  pubSub.subscribe('params2Changed', initView)


  return {
    initView: initView,
  }

})()

console.log('view', view)


