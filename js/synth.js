// seems like this would be redundant after all...

class Synth extends Tone.Synth {
  constructor() {
    super();
  }

  setPortamento = value => {
    this.portamento = value
  }
  setVolume = value => {
    this.volume.value = value
  }
  setDetune = value => {
    this.detune.value = value
  }
  setWave = value => {
    this.oscillator.type = value
  }
}


