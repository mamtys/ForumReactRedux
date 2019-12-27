import {combineReducers} from 'redux';

import createVoteReducer from '../generators/enchanters/vote';
import createLoadReducer from '../generators/enchanters/load';
import actionTypes from '../constants/replies';

import {withEnchanter} from '../utils';



const repliesReducer = (state = {}, action) => {
    switch(action.type){

        case actionTypes.SET_REPLIES: {
            return {...state, ...action.payload}
        }
        case actionTypes.CREATE_REPLY_SUCCESS: {
            return {...state, ...action.payload}
        }
        

        default: return state;
    }
}


const asyncReducer = (state = {}, action) => {
    switch(action.type){
        case actionTypes.CREATE_REPLY_REQUEST: {
            return {
                ...state,
                [action.payload.parentId]: {
                    status: 'loading',

                }
            }
        }
        case actionTypes.CREATE_REPLY_SUCCESS: {
            return {
                ...state,
                [action.id]: {
                    status: 'loaded'
                }
            }
        }
        case actionTypes.CREATE_REPLY_FAIL: {
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
    byId: repliesReducer,
    status: combineReducers({
        create: asyncReducer,
        vote: createVoteReducer(actionTypes),
        load: createLoadReducer(actionTypes)
    })
})