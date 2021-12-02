const openNavReducer = (state = false, action) => {
    switch (action.type) {
        case 'toggleOpenNav':
            return !state
        default:
            return state
    }
}

export default openNavReducer