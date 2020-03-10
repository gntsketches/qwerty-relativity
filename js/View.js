
// View ****************************************************************************

const view = (function() {
  const leftHandDOM = $('#left-hand')
  const rightHandDOM = $('#right-hand')
  const leftSpacebarDOM = $('#spacebar-left')
  const rightSpacebarDOM = $('#spacebar-right')
  const synth1SustainDOM = $('#synth1-sustain')
  const synth2SustainDOM = $('#synth2-sustain')
  const synth1VolumeDOM = $('#synth1-volume')
  const synth2VolumeDOM = $('#synth2-volume')
  const synth1GlideDOM = $('#synth1-glide')
  const synth2GlideDOM = $('#synth2-glide')
  const synth1VibratoDOM = $('#synth1-vibrato')
  const synth2VibratoDOM = $('#synth2-vibrato')
  const synth1DetuneDOM = $('#synth1-detune')
  const synth2DetuneDOM = $('#synth2-detune')
  const synth1WaveDOM = $('#synth1-wave')
  const synth2WaveDOM = $('#synth2-wave')

  let pitch1DOM = null
  let pitch2DOM = null


  const buildPitchView = function(synthNum) {
    const pitch = model.state[synthNum].pitch

    return $([
      "<div class='" + synthNum + "-display'>",
      "  <div class='which-synth'>" + synthNum + "</div>",
      "  <div class='" + synthNum + "-pitch'>" + pitch + "</div>",
      "</div>"
    ].join("\n"));
  }

  const buildParamsView = function(synthNum, hand) {
    console.log('buildParamsView', synthNum)
    const topParam = model.state[synthNum].paramRows.top
    const topParamVal= model.state[synthNum].params[topParam]
    const middleParam = model.state[synthNum].paramRows.middle
    const middleParamVal= model.state[synthNum].params[middleParam]
    const bottomParam = model.state[synthNum].paramRows.bottom
    const bottomParamVal= model.state[synthNum].params[bottomParam]

    const handGrid = hand === 'left'
      ? ["<span>q-Vol</span><span>w-Glide</span><span>e-Vib</span><span>r-Tune</span>"]
      : ["<span>i-Vol</span><span>o-Glide</span><span>p-Vib</span><span>[-Tune</span>"];

    if (model.state[synthNum].awaitingParamAssign !== false) {
      console.log('awaitingParamAssign in view')
      const editingRow = model.state[synthNum].awaitingParamAssign
      return $([
        "<div class='" + synthNum + "-display'>",
        "  <div class='which-synth'>choose " + synthNum + " " + editingRow + " param:</div>",
        "  <div class='param-grid'>",
        "    <div class='param-grid-row'>",
        ...handGrid,
        "    </div>",
        "  </div>",
        "</div>"
      ].join("\n"));
    }

    return $([
      "<div class='" + synthNum + "-display'>",
      "  <div class='which-synth'>" + synthNum + "</div>",
      "  <div class='param-container'>",
      "    <span class='editing-param'>" + topParam + ": </span>",
      "    <span class='param-value'>" + topParamVal + "</span>",
      "  </div>",
      "  <div class='param-container'>",
      "    <span class='editing-param'>" + middleParam + ": </span>",
      "    <span class='param-value'>" + middleParamVal + "</span>",
      "  </div>",
      "  <div class='param-container'>",
      "    <span class='editing-param'>" + bottomParam + ": </span>",
      "    <span class='param-value'>" + bottomParamVal + "</span>",
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
        leftHandDOM.html(buildParamsView('synth1', 'left')) // this is confusing. params and synth mean 2 different things here
        break
      case 'params2':
        leftHandDOM.html(buildParamsView('synth2', 'left'))
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
        rightHandDOM.html(buildParamsView('synth1', 'right'))
        break
      case 'params2':
        rightHandDOM.html(buildParamsView('synth2', 'right'))
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
  const setSynth1Volume = function() { synth1VolumeDOM.html("Volume: " + model.state.synth1.params.volume) }
  const setSynth2Volume = function() { synth2VolumeDOM.html("Volume: " + model.state.synth2.params.volume) }
  const setSynth1Glide = function() { synth1GlideDOM.html("Glide: " + model.state.synth1.params.glide) }
  const setSynth2Glide = function() { synth2GlideDOM.html("Glide: " + model.state.synth2.params.glide) }
  const setSynth1Vibrato = function() { synth1VibratoDOM.html("Vibrato: " + model.state.synth1.params.vibrato) }
  const setSynth2Vibrato = function() { synth2VibratoDOM.html("Vibrato: " + model.state.synth2.params.vibrato) }
  const setSynth1Detune = function() { synth1DetuneDOM.html("Detune: " + model.state.synth1.params.detune) }
  const setSynth2Detune = function() { synth2DetuneDOM.html("Detune: " + model.state.synth2.params.detune) }
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
    setSynth1Volume()
    setSynth2Volume()
    setSynth1Vibrato()
    setSynth2Vibrato()
    setSynth1Glide()
    setSynth2Glide()
    setSynth1Detune()
    setSynth2Detune()
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


