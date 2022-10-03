const showNavReducer = (state = true, action) => { 
  switch (action.type) {
        case 'toggleShowNav':
            return !state
        default:
            return state
  }
}

export default showNavReducer