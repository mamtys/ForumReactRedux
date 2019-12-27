
const createLoadReducer = (types) => (state = {}, action) => {
    switch (action.type) {
        case types.LOAD_ONE_REQUEST:
        case types.LOAD_REQUEST: {
            return {
                ...state, 
                status: 'loading'
            }
        }
        case types.LOAD_SUCCESS: {
            return {
                ...state,
                status: 'loaded',
            }
        }
        case types.LOAD_ONE_SUCCESS: {
            return {
                ...state, 
                status: 'loaded',
            }
        }
        case types.LOAD_ONE_FAIL:
        case types.LOAD_FAIL: {
            console.log(action.error)
            return {
                ...state,
                status: 'error',
                message: action.error.statusText || action.error.message
            }
        }
        default: return state;
    }
}

export default createLoadReducer;