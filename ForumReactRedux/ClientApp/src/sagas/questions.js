import { takeEvery, fork , take, put} from 'redux-saga/effects';
import Actions from '../redux/actions/questions';
import ActionTypes from '../redux/constants/questions';
import AnswerActions from '../redux/actions/answers';
import ReplyActions from '../redux/actions/replies';
import UserActions from '../redux/actions/users';
import Services from '../services/questionService';


function* voteUp(){
    yield take(ActionTypes, function* (action) {

        try {
            const response = yield action.promice();
            
        } catch(error) {
            console.log(error.response)
        }
    })
}


function* loadQuestions(){
    yield takeEvery(ActionTypes.LOAD_REQUEST, function* (action) {
        try {
            const response = yield Services.load();
            console.log(response);
            const normalized = Services.normalizeArray(response.data);
            const {entities:{questions, users}, result} = normalized;
            console.log(normalized);

            yield put(UserActions.setUsers(users));
            yield put(Actions.loadSuccess(questions, result));
        } catch(error) {
            console.log(error);
            yield put(Actions.loadFail(error))
        }
    })
}


function* loadOneQuestion(){
    yield takeEvery(ActionTypes.LOAD_ONE_REQUEST, function* (action) {

        try {
            const response = yield Services.loadOne(action.payload.id);
            console.log(response);
            if (!response.data) throw new Error('Not Found');

            const normalized = Services.normalizeEntity(response.data);
            console.log(normalized);
            const {entities: {question, answers, replies, users}} = normalized;

            yield put(UserActions.setUsers(users));
            yield put(ReplyActions.setReplies(replies))
            yield put(AnswerActions.setAnswers(answers))
            yield put(Actions.loadOneSuccess(question));

        } catch(error) {
            console.log(error);
            yield put(Actions.loadOneFail(error))
        }
    })
}

function* acceptAnswer(){
    yield takeEvery(ActionTypes.ACCEPT_ANSWER_REQUEST, function* (action) {
        try {
            const response = yield Services.acceptAnswer(action.payload.questionId, action.payload.answerId);
            console.log(response);
            if (!response.data) throw new Error('Not Found');

            const normalized = Services.normalizeEntity(response.data);
            console.log(normalized);
            const {entities: {question, answers, replies, users}} = normalized;

            yield put(UserActions.setUsers(users));
            yield put(ReplyActions.setReplies(replies))
            yield put(AnswerActions.setAnswers(answers))
            yield put(Actions.acceptAnswerSuccess(question));
        } catch (error) {
            console.log(error);
            yield put(Actions.acceptAnswerFail(error.response));
        }
    })
}

export default function* root() {
    yield fork(loadQuestions)
    yield fork(loadOneQuestion)
    yield fork(acceptAnswer)
}