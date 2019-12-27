

const createVoteReducer = (types) => (state = {}, action) => {
    switch (action.type){
        case types.VOTE_DOWN_REQUEST: {
            return {
                ...state,
                status: 'loading'
            }
        }
        case types.VOTE_DOWN_SUCCESS: {
            return {
                ...state,
                status: 'loaded',
            }
        }
        case types.VOTE_UP_REQUEST: {
            return {
                ...state,
                status: 'loading'
            }
        }
        case types.VOTE_UP_SUCCESS: {
            return {
                ...state,
                status: 'loaded',
            }
        }
        case types.VOTE_UP_FAIL:
        case types.VOTE_DOWN_FAIL: {
            return {
                ...state,
                status: 'error',
                message: action.error.statusText || action.error.message
            }
        }
        default: return state
    }
}

export default createVoteReducer;
