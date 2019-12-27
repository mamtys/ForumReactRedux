import {combineReducers} from 'redux';

import createLoadReducer from '../generators/enchanters/load';

import actionTypes from '../constants/users';





const usersReducer = (state = {}, action) => {
    switch(action.type){
        case actionTypes.SET_USERS:
        case actionTypes.LOAD_SUCCESS:
        case actionTypes.LOAD_ONE_SUCCESS: {
            return {...state, ...action.payload.byId}
        }

        default: return state;
    }
}



const allUsersReducer = (state = [], action) => {
    switch(action.type){
        case actionTypes.LOAD_SUCCESS:
        case actionTypes.LOAD_ONE_SUCCESS: 
        case actionTypes.SET_QUESTIONS: {
            console.log(action.payload.allIds);
            return state.filter(id => !action.payload.allIds.includes(id)).concat(action.payload.allIds)
        }
        default: return state;
    }
}



export default combineReducers({
    byId: usersReducer,
    allIds: allUsersReducer,
    status: createLoadReducer(actionTypes),
})
