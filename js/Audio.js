
// Audio *************************************************************************

const audio = (function() {

  const synth1 = new Tone.Synth(
    {
      "oscillator" : { "type" : "triangle" },
      "envelope" : constants.envelope,
      "volume": -3,
    }
  )

  const vibrato1 = new Tone.Vibrato()
  vibrato1.frequency.value = model.state.synth1.params.Vibrato
  const gain = new Tone.Gain()
  gain.gain.value = 0.5
  synth1.connect(vibrato1)
  vibrato1.connect(gain)
  gain.toMaster()

  const synth2 = new Tone.Synth(
    {
      "oscillator" : { "type" : "sawtooth" },
      "envelope" : constants.envelope,
      "volume": -10,
    }
  )

  const vibrato2 = new Tone.Vibrato()
  vibrato2.frequency.value = model.state.synth2.params.Vibrato
  const gain2 = new Tone.Gain()
  gain2.gain.value = 0.5
  synth2.connect(vibrato2)
  vibrato2.connect(gain)
  gain2.toMaster()

  const playSynth1 = function() {
    if (model.state.synth1.sustain === 'Pluck') {
      synth1.triggerAttackRelease(model.state.synth1.pitch, '8n')
    } else {
      console.log('triggerAttack', model.state.synth1.pitch)
      synth1.triggerAttack(model.state.synth1.pitch)
    }
  }

  const stopSynth1 = function() {
    console.log('stop 1')
    // synth1.triggerRelease(model.state.synth1.pitch, '8n')  // doesn't work (in mono synth) if you pass it a pitch...
    synth1.triggerRelease()
  }

  const changeSynth1Holding = function() {
    console.log('changeSynth1Holding')
    if (model.state.synth1.holding === true) {
      playSynth1()
    } else {
      stopSynth1()
    }
  }

  const changeSynth2Holding = function() {
    if (model.state.synth2.holding === true) {
      playSynth2()
    } else {
      stopSynth2()
    }
  }

  const setSynth1Portamento = function() {
    synth1.portamento = model.state.synth1.params.Portamento
  }

  const setSynth1VibratoFrequency = function() {
    vibrato1.frequency.value = model.state.synth1.params.Vibrato
  }

  const playSynth2 = function() {
    console.log('play 2')
    if (model.state.synth2.sustain === 'Pluck') {
      synth2.triggerAttackRelease(model.state.synth2.pitch, '8n')
    } else {
      synth2.triggerAttack(model.state.synth2.pitch)
    }
  }

  const stopSynth2 = function() {
    console.log('stop 2')
    synth2.triggerRelease()
  }

  const setSynth2Portamento = function() {
    synth2.portamento = model.state.synth2.params.Portamento
  }

  const setSynth2VibratoFrequency = function() {
    vibrato2.frequency.value = model.state.synth2.params.Vibrato
  }

  const updateSynth1Param = function() {
    // console.log('updating current sound param', model.state)
    switch (model.state.synth1.editingParam) {
      case 'Portamento':
        setSynth1Portamento()
        break
      case 'Vibrato':
        setSynth1VibratoFrequency()
        break
    }
  }

  const updateSynth2Param = function() {
    console.log('updating current sound param')
    switch (model.state.synth2.editingParam) {
      case 'Portamento':
        setSynth2Portamento()
        break
      case 'Vibrato':
        setSynth2VibratoFrequency()
        break
    }
  }

  pubSub.subscribe('params1Changed', updateSynth1Param)
  pubSub.subscribe('params2Changed', updateSynth2Param)
  pubSub.subscribe('synth1HoldingToggled', changeSynth1Holding)
  pubSub.subscribe('synth2HoldingToggled', changeSynth2Holding)

  return {
    playSynth1: playSynth1,
    playSynth2: playSynth2,
    stopSynth1: stopSynth1,
    stopSynth2: stopSynth2,
  }

})()
