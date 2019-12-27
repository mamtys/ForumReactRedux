
import createVoteReducer from '../generators/enchanters/vote';
import createLoadReducer from '../generators/enchanters/load';

import {combineReducers } from 'redux';
import actionTypes from '../constants/answers';

const initialState = {

}


const answersReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_ANSWERS: {
            return {...state, ...action.payload}
        }
        case actionTypes.CREATE_ANSWER_SUCCESS: {
            return {...state, ...action.payload}
        }
        case actionTypes.LOAD_SUCCESS:
        case actionTypes.LOAD_ONE_SUCCESS:
        case actionTypes.VOTE_UP_SUCCESS:
        case actionTypes.VOTE_DOWN_SUCCESS: {
            return {...state, ...action.payload.byId}
        }

        default: return state;
    }
}


const asyncReducer = (state = {}, action) => {
    switch(action.type){
        case actionTypes.CREATE_ANSWER_REQUEST: {
            return {
                ...state,
                [action.payload.questionId]: {
                    status: 'loading',

                }
            }
        }
        case actionTypes.CREATE_ANSWER_SUCCESS: {
            return {
                ...state,
                [action.id]: {
                    status: 'loaded'
                }
            }
        }
        case actionTypes.CREATE_ANSWER_FAIL: {
            return {
                ...state,
                [action.id]: {
                    status: 'error',
                    message: action.error.statusText,
                }
            }
        }
        default: return state;
    }
}




export default combineReducers({
    byId: answersReducer,
    status: combineReducers({
        create: asyncReducer,
        vote: createVoteReducer(actionTypes),
        load: createLoadReducer(actionTypes)
    })
})