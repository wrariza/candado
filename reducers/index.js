function reducer(state, action) {
  switch (action.type) {
    case 'F':
      return { ...state, playlist: action.payload.playlist }
    default:
      return state
  }
}

export default reducer;