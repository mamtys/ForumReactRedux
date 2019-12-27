import { takeEvery, fork , take, put, all} from 'redux-saga/effects';
import AnswerActions from '../redux/actions/answers';
import ActionTypes from '../redux/constants/answers';
import ReplyActions from '../redux/actions/replies';
import QuestionActions from '../redux/actions/questions';
import UserActions from '../redux/actions/users';

import answerService from '../services/answerService';
import questionService from '../services/questionService';

function* voteUp(){
    yield takeEvery(ActionTypes.VOTE_UP_REQUEST, function* (action) {
        try {
            const response = yield answerService.voteUp(action.payload.id);
            const normalized = answerService.normalizeSimpleEntity(response.data);
            const {entities: {user, answer}} = normalized;
            console.log(normalized);
            yield put(UserActions.setUsers(user));
            yield put(AnswerActions.voteUpSuccess(answer));
        } catch(error) {
            console.log(error.response)
            yield put(AnswerActions.voteUpFail(error.response));
        }
    })
}

function* voteDown(){
    yield takeEvery(ActionTypes.VOTE_DOWN_REQUEST, function* (action) {
        try {
            const response = yield answerService.voteDown(action.payload.id);
            const normalized = answerService.normalizeSimpleEntity(response.data);
            const {entities: {user, answer}} = normalized;
            console.log(normalized);
            yield put(UserActions.setUsers(user));
            yield put(AnswerActions.voteDownSuccess(answer));
        } catch(error) {
            console.log(error)
            yield put(AnswerActions.voteDownFail(error.response));
        }
    })
}


function* answerQuestion(){
    yield takeEvery(ActionTypes.CREATE_ANSWER_REQUEST, function* (action) {
        try {
            const response = yield action.promice();
            console.log(response);
            const normalized = questionService.normalizeEntity(response.data);
            const {entities: {question, answers, replies, users}} = normalized;

            yield put(UserActions.setUsers(users));
            yield put(ReplyActions.setReplies(replies));
            yield put(AnswerActions.setAnswers(answers));
            yield put(QuestionActions.setQuestions(question));

            yield put(AnswerActions.createAnswerSuccess(replies, response.data.id));   

        } catch(error) {
            console.log(error);
            yield put(AnswerActions.createAnswerFail(error.response, action.payload.questionId))
        }
    })
}

function* loadAnswers(){
    yield takeEvery(ActionTypes.LOAD_REQUEST, function* (action) {
        try {
            const response = yield answerService.loadByQuestionId(action.payload.id);
            console.log(response);
            const normalized = answerService.normalizeEntity(response.data);
            const {entities: {answers, replies, user}} = normalized;
            console.log(normalized);

            yield put(UserActions.setUsers(user));
            yield put(ReplyActions.setReplies(replies));
            yield put(AnswerActions.loadSuccess(answers));
        } catch(error) {
            console.log(error);
            yield put(AnswerActions.loadFail(error))
        }
    })
}


export default function* root() {
    yield fork(answerQuestion)
    yield fork(voteUp)
    yield fork(voteDown)
    yield fork(loadAnswers)
}