export const addNote = function(store) {
  var dispatch = store.dispatch
  dispatch('ADD_NOTE')
}

export const editNote = function(store, e) {
  var dispatch = store.dispatch
  dispatch('EDIT_NOTE', e.target.value)
}

export const deleteNote = function(store) {
  var dispatch = store.dispatch
  dispatch('DELETE_NOTE')
}

export const updateActiveNote = function(store, note) {
  var dispatch = store.dispatch
  dispatch('SET_ACTIVE_NOTE', note)
}

export const toggleFavorite = function(store) {
  var dispatch = store.dispatch
  dispatch('TOGGLE_FAVORITE')
}
