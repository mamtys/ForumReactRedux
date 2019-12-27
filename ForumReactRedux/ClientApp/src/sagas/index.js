import { select, takeEvery, fork } from 'redux-saga/effects';
import questionSaga from './questions';
import authSaga from './auth';
import replySaga from './replies';
import answerSaga from './answers';

function* testPattern(){
    yield takeEvery('*', function* logger(action) {
        if (!action.type.match(/REQUEST/)) return;

        try {
            // const asyncAction = yield action.promice()
        } catch(error) {
            console.log(error.response, error)
            console.log(error instanceof Error)
        }

        const state = yield select()
    
        console.log('action', action);
        console.log('state after', state);
    })
}

export default function* root(){
    yield fork(testPattern)
    yield fork(questionSaga)
    yield fork(authSaga)
    yield fork(replySaga)
    yield fork(answerSaga)
}