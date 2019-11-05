
// Audio *************************************************************************

const audio = (function() {

  const synth = new Tone.Synth(
    {
      "oscillator" : { "type" : "triangle" },
      "envelope" : constants.envelope,
      "volume": -5,
    }
  )

  const vibrato = new Tone.Vibrato()
  vibrato.frequency.value = model.state.params.Vibrato
  const gain = new Tone.Gain()
  gain.gain.value = 0.5
  synth.connect(vibrato)
  vibrato.connect(gain)
  gain.toMaster()

  const synthTwo = new Tone.Synth(
    {
      "oscillator" : { "type" : "sawtooth" },
      "envelope" : constants.envelope,
      "volume": -12,
    }
  )

  const vibratoTwo = new Tone.Vibrato()
  vibratoTwo.frequency.value = model.state.params.Vibrato
  const gainTwo = new Tone.Gain()
  gainTwo.gain.value = 0.5
  synthTwo.connect(vibrato)
  vibratoTwo.connect(gain)
  gainTwo.toMaster()

  const playSynth = function() {
    synth.triggerAttackRelease(model.state.currentRootNote, '8n')
  }

  // const playSynthTwo = function() {
  //   synth.triggerAttackRelease(model.state.currentRootNote, '8n')
  // }

  const setPortamento = function() {
    synth.portamento = model.state.params.Portamento
  }

  const setVibratoFrequency = function() {
    vibrato.frequency.value = model.state.params.Vibrato
  }

  const updateCurrentSoundParam = function() {
    console.log('updating current sound param')
    switch (model.state.editingParam) {
      case 'Portamento':
        setPortamento()
        break
      case 'Vibrato':
        setVibratoFrequency()
        console.log('vib', vibrato.frequency.value)
        break
    }
  }

  pubSub.subscribe('soundParamsChanged', updateCurrentSoundParam)
  // pubSub.subscribe('synthTwoParamsChanged', updateSynthTwoEditingParam)

  return {
    play: playSynth,
  }

})()
