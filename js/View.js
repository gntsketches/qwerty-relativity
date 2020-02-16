
// View ****************************************************************************

const view = (function() {
  const leftHandDOM = $('#left-hand')
  const rightHandDOM = $('#right-hand')
  const leftSpacebarDOM = $('#spacebar-left')
  const rightSpacebarDOM = $('#spacebar-right')
  const synth1SustainDOM = $('#synth1-sustain')
  const synth2SustainDOM = $('#synth2-sustain')
  const synth1VibratoDOM = $('#synth1-vibrato')
  const synth2VibratoDOM = $('#synth2-vibrato')
  const synth1GlideDOM = $('#synth1-glide')
  const synth2GlideDOM = $('#synth2-glide')
  const synth1WaveDOM = $('#synth1-wave')
  const synth2WaveDOM = $('#synth2-wave')

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
    // console.log('changing pitch1 view...', model.state.synth1.pitch)
    $.each(pitch1DOM, function(i, v) {
      // console.log('v', v)
      $(v).html(model.state.synth1.pitch)
      // console.log('v.html', v.html)
    })
  }

  const updatePitches2View = function() {
    console.log('changing pitch2 view...', model.state.synth2.pitch)
    $.each(pitch2DOM, function(i, v) {
      $(v).html(model.state.synth2.pitch)
    })
  }

  const setSpaceBarView = function() {
    console.log('setting spacebar view')
    const spaceHand = model.state.spacebar === 'left' ? leftSpacebarDOM : rightSpacebarDOM
    const nonSpaceHand = model.state.spacebar === 'left' ? rightSpacebarDOM : leftSpacebarDOM
    spaceHand.css("opacity", "1");
    nonSpaceHand.css("opacity", "0.1");
  };

  // SYNTH INFO ************************************************************

  const setSynth1Sustain = function() { synth1SustainDOM.html("Sustain: " + model.state.synth1.sustain) }
  const setSynth2Sustain = function() { synth2SustainDOM.html("Sustain: " + model.state.synth2.sustain) }
  const setSynth1Vibrato = function() { synth1VibratoDOM.html("Vibrato: " + model.state.synth1.params.Vibrato) }
  const setSynth2Vibrato = function() { synth2VibratoDOM.html("Vibrato: " + model.state.synth2.params.Vibrato) }
  const setSynth1Glide = function() { synth1GlideDOM.html("Glide: " + model.state.synth1.params.Portamento) }
  const setSynth2Glide = function() { synth2GlideDOM.html("Glide: " + model.state.synth2.params.Portamento) }
  const setSynth1Wave = function() { synth1WaveDOM.html("Wave: " + ucFirst(model.state.synth1.wave)) }
  const setSynth2Wave = function() { synth2WaveDOM.html("Wave: " + ucFirst(model.state.synth2.wave)) }


  // INIT ******************************************************************

  const initView = function() {
    // console.log('initializing view')

    setLeftHandView()
    setRightHandView()
    pitch1DOM = $('.synth1-pitch')
    // console.log('pitch1DOM', pitch1DOM)
    pitch2DOM = $('.synth2-pitch')
    // console.log('pitch2DOM', pitch2DOM)
    setSpaceBarView()

    setSynth1Sustain()
    setSynth2Sustain()
    setSynth1Vibrato()
    setSynth2Vibrato()
    setSynth1Glide()
    setSynth2Glide()
    setSynth1Wave()
    setSynth2Wave()

  }

  pubSub.subscribe('swapHands', initView)
  pubSub.subscribe('synth1SustainChanged', setSynth1Sustain)
  pubSub.subscribe('synth2SustainChanged', setSynth2Sustain)
  pubSub.subscribe('basePitch1Changed', updatePitches1View)
  pubSub.subscribe('basePitch2Changed', updatePitches2View)
  pubSub.subscribe('synth1WaveChanged', setSynth1Wave)
  pubSub.subscribe('synth2WaveChanged', setSynth2Wave)
  // build subscribers for each param change, as with pitches
  pubSub.subscribe('params1Changed', initView)
  pubSub.subscribe('params2Changed', initView)
  pubSub.subscribe('spacebarToggled', setSpaceBarView)


  return {
    initView: initView,
  }

})()

// console.log('view', view)


