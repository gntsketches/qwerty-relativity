
console.log('pubSub', pubSub)

// Model *************************************************************************

const model = (function() {

  const state = {
    handed: 'left',
    currentRootNote: 'C3',
    editingParam: 'Portamento',
    params: {
      Portamento: 0,
      Vibrato: 0
    },

    leftHand: 'synthOnePitches',
    rightHand: 'synthOneParams',
    synthsLinked: false,
    spacebar: 'left',

    synthOne: {
      root: 'C3',
      editingParam: 'Portamento',
      params: {
        Portamento: 0,
        Vibrato: 0
      },
    },
    synthTwo: {
      root: 'C3',
      editingParam: 'Portamento',
      params: {
        Portamento: 0,
        Vibrato: 0
      },
    },
  }

  const swapHands = function() {
    // swapHands swaps spacebar!
    if (state.handed==='right') { state.handed = 'left'}
    else if (state.handed==='left') { state.handed = 'right'}
    pubSub.publish('swapHands')
  }

  const setCurrentRootNote = function(interval) {
    let noteIndex = constants.fullRange.indexOf(state.currentRootNote)
    noteIndex = noteIndex + constants.intervalConversions[interval]
    if (noteIndex > -1 && noteIndex <= constants.fullRange.length-1) {
      state.currentRootNote = constants.fullRange[noteIndex]
    }
    pubSub.publish('rootNoteChanged', state.currentRootNote)
  }

  const changeEditingParam = function(param) {
    state.editingParam = param
    pubSub.publish('soundParamsChanged')
  }

  const setParam = function(value) {
    state.params[state.editingParam] = value
    pubSub.publish('soundParamsChanged')
  }

  const updateParamFromKey = function(pressed) {
    console.log('pressed', pressed)
    if (pressed in constants.param_select_keys) {
      changeEditingParam(constants.param_select_keys[pressed])
    } else if (state.editingParam==='Portamento' && pressed in constants.portamento_keys) {
      setParam(constants.portamento_keys[pressed])
    } else if (state.editingParam==='Vibrato' && pressed in constants.vibrato_keys) {
      setParam(constants.vibrato_keys[pressed])
    }
  }


  return {
    state: state,
    swapHands: swapHands,
    setRoot: setCurrentRootNote,
    updateParam: updateParamFromKey
  }

})()
