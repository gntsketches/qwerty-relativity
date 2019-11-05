
// View ****************************************************************************

const view = (function() {
  const leftHandView = $('#left-hand')
  const rightHandView = $('#right-hand')

  let rootNoteView = null, soundParamsView = null


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


  const updateRootNoteView = function() {
    console.log('changing root view...', model.state.currentRootNote)
    rootNoteView.html(buildNoteView(model.state.currentRootNote))
  }

  const updateSoundParamsView = function() {
    console.log('updating sound params view')
    soundParamsView.html(buildSoundParamsView(model.state.editingParam, model.state.params[model.state.editingParam] ))
  }

  const initView = function() {
    console.log('initializing view')
    if (model.state.handed === 'left') {
      rootNoteView = leftHandView
      soundParamsView = rightHandView
    } else {
      rootNoteView = rightHandView
      soundParamsView = leftHandView
    }
    updateRootNoteView()
    updateSoundParamsView()
  }

  pubSub.subscribe('swapHands', initView)
  pubSub.subscribe('rootNoteChanged', updateRootNoteView)
  pubSub.subscribe('soundParamsChanged', updateSoundParamsView)


  return {
    initView: initView,
  }

})()

console.log('view', view)


