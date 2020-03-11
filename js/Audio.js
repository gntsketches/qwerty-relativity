
// Audio *************************************************************************

const audio = (function() {

  // SYNTH 1 --------------------------------------------------------------
  const synth1 = new Tone.Synth(
    {
      "oscillator" : { "type" : "triangle" },
      "envelope" : constants.envelope,
      "volume": model.state.synth1.params.volume,
    }
  )
  const vibrato1 = new Tone.Vibrato()
  vibrato1.frequency.value = model.state.synth1.params.Vibrato
  const gain = new Tone.Gain()
  gain.gain.value = 0.5
  synth1.connect(vibrato1)
  vibrato1.connect(gain)
  gain.toMaster()

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

  const updateSynth1Param = function(param) {
    console.log('updating param', param)
    switch (param) {
      case 'volume':
        synth1.volume.value = model.state.synth1.params.volume
        break
      case 'glide':
        synth1.portamento = model.state.synth1.params.glide
        break
      case 'detune':
        synth1.detune.value = model.state.synth1.params.detune
        break
      case 'vibrato':
        vibrato1.frequency.value = model.state.synth1.params.vibrato
        break
      case 'attack':
        synth1.envelope.attack = model.state.synth1.params.attack
        break
      case 'decay':
        synth1.envelope.decay = model.state.synth1.params.decay
        break
      case 'sustain':
        synth1.envelope.sustain = model.state.synth1.params.sustain
        break
      case 'release':
        vibrato1.envelope.release = model.state.synth1.params.release
        break
      default:
        return
    }
  }

  const setSynth1Wave = function() {
    synth1.oscillator.type = model.state.synth1.wave
  }


  // SYNTH 2 --------------------------------------------------------------
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

  const changeSynth2Holding = function() {
    if (model.state.synth2.holding === true) {
      playSynth2()
    } else {
      stopSynth2()
    }
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

  const updateSynth2Param = function(param) {
    console.log('updating param', param)
    switch (param) {
      case 'volume':
        synth2.volume.value = model.state.synth2.params.volume
        break
      case 'glide':
        synth2.portamento = model.state.synth2.params.glide
        break
      case 'detune':
        synth2.detune.value = model.state.synth2.params.detune
        break
      case 'vibrato':
        vibrato2.frequency.value = model.state.synth2.params.vibrato
        break
      case 'attack':
        synth2.envelope.attack = model.state.synth2.params.attack
        break
      case 'decay':
        synth2.envelope.decay = model.state.synth2.params.decay
        break
      case 'sustain':
        synth2.envelope.sustain = model.state.synth2.params.sustain
        break
      case 'release':
        vibrato2.envelope.release = model.state.synth2.params.release
        break
      default:
        return
    }

  }

  const setSynth2Wave = function() {
    synth2.oscillator.type = model.state.synth2.wave
  }


  // SUBSCIPTIONS -----------------------------------------------------
  pubSub.subscribe('params1Changed', updateSynth1Param)
  pubSub.subscribe('params2Changed', updateSynth2Param)
  pubSub.subscribe('synth1HoldingToggled', changeSynth1Holding)
  pubSub.subscribe('synth2HoldingToggled', changeSynth2Holding)
  pubSub.subscribe('synth1WaveChanged', setSynth1Wave)
  pubSub.subscribe('synth2WaveChanged', setSynth2Wave)


  return {
    playSynth1: playSynth1,
    playSynth2: playSynth2,
    stopSynth1: stopSynth1,
    stopSynth2: stopSynth2,
  }

})()
