import { takeEvery, fork , take, put} from 'redux-saga/effects';
import Actions from '../redux/actions/auth';
import Services from '../services/authService';

function* login(){
    yield takeEvery(Actions.login().type, function* (action) {
        try {
            const response = yield action.promice();
            console.log(response);
            const {user, token} = response.data;
            Services.setUser(user);
            Services.setToken(token);
            yield put(Actions.loginSuccess(user));
        } catch(error) {
            console.log(error);
            yield put(Actions.loginFail(error.response))
        }
    })
}

function* register(){
    yield takeEvery(Actions.register().type, function* (action) {
        try {
            const response = yield action.promice();
            console.log(response);
            const {user, token} = response.data;
            Services.setUser(user);
            Services.setToken(token);
            yield put(Actions.registerSuccess(user));
        } catch(error) {
            console.log(error);
            yield put(Actions.registerFail(error.response))
        }
    })
}



export default function* root() {
    yield fork(login)
    yield fork(register)
}