import AuthService from '../../services/authService';
import answerTypes from '../constants/auth';


const login = (login, password) => {
    return {
        type: answerTypes.LOGIN_REQUEST,
        promice: () => AuthService.login(login, password)
    }
}

const loginSuccess = (user) => {
    return{
        type: answerTypes.LOGIN_SUCCESS,
        payload: {...user}
    }
}

const loginFail = (error) => {
    return{
        type: answerTypes.LOGIN_FAIL,
        error
    }
}

const register = (login, password)  => {
    return {
        type: answerTypes.REGISTER_REQUEST,
        promice: () => AuthService.register(login, password)
    }
}

const registerSuccess = (user) => {
    return{
        type: answerTypes.REGISTER_SUCCESS,
        payload: {...user}
    }
}

const registerFail = (error) => {
    return{
        type: answerTypes.REGISTER_FAIL,
        error
    }
}

export default {
    login,
    loginSuccess,
    loginFail,
    register,
    registerSuccess,
    registerFail
}