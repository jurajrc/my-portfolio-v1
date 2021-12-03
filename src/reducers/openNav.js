const openNavReducer = (state = false, action) => {
    switch (action.type) {
        case 'toggleOpenNav':
            return !state;
        case 'OPEN':
            return true;
        case 'CLOSE':
            return false;
        default:
            return state;
    }
}

export default openNavReducer