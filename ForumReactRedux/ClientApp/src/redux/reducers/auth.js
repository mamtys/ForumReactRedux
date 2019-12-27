
import actionTypes from '../constants/auth';
import {combineReducers} from 'redux';
import Services from '../../services/authService';
const user = Services.getUser();


const initialUserState = {
    ...user
}


const loginReducer = (state = {}, action) => {
    switch(action.type){
        case actionTypes.LOGIN_REQUEST: {
            return {...state, status: 'loading'}
        }
        case actionTypes.LOGIN_SUCCESS: {
            return {...state, status: 'success'}
        }
        case actionTypes.LOGIN_FAIL: {

            return {
                ...state,
                status: 'error',
                message: action.error.statusText
            }
        }   
        default: return state;
    }
}

const registerReducer = (state = {}, action) => {
    switch(action.type){
        case actionTypes.REGISTER_REQUEST: {
            return {...state, status: 'loading'}
        }
        case actionTypes.REGISTER_SUCCESS: {
            return {...state, status: 'success'}
        }
        case actionTypes.REGISTER_FAIL: {
            return {
                ...state,
                status: 'error',
                message: action.error.statusText
            }
        }   
        default: return state;
    }
}

const userReducer = (state = initialUserState, action) => {
    switch(action.type){
        case actionTypes.LOGIN_SUCCESS: 
        case actionTypes.REGISTER_SUCCESS: {
            return {...state, ...action.payload}
        }
        default: return state;
    }
}


export default combineReducers({
    register: registerReducer,
    login: loginReducer,
    user: userReducer
})
