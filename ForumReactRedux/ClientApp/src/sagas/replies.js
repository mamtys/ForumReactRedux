import { takeEvery, fork , take, put} from 'redux-saga/effects';
import Actions from '../redux/actions/replies';
import ActionTypes from '../redux/constants/replies';
import AnswerActions from '../redux/actions/answers';
import UserActions from '../redux/actions/users';
import ReplyActions from '../redux/actions/replies';

import answerService from '../services/answerService';
import replyService from '../services/repliesSerivece';

function* voteUp(){
    yield take(ActionTypes.VOTE_UP_REQUEST, function* (action) {
        try {
            const response = yield replyService.voteUp(action.payload.id);
            yield put(ReplyActions.voteUpSuccess(response.data));
        } catch(error) {
            console.log(error.response)
        }
    })
}

function* loadReplies(){
    yield takeEvery(ActionTypes.LOAD_REQUEST, function* (action) {
        try {
            const response = yield replyService.loadByQuestionId(action.payload.id);
            console.log(response);
            const normalized = replyService.normalizeArray(response.data);
            const {entities:{reply, user}, result} = normalized;
            console.log(normalized);

            yield put(UserActions.setUsers(user));
            yield put(Actions.loadSuccess(reply, result));
        } catch(error) {
            console.log(error);
            yield put(Actions.loadFail(error))
        }
    })
}


function* replyAnswer(){
    yield takeEvery(ActionTypes.CREATE_REPLY_REQUEST, function* (action) {
        try {
            const response = yield action.promice();
            console.log(response);
            const normalized = answerService.normalizeEntity(response.data);
            const {answers, replies, users} = normalized.entities
            console.log(normalized);
            yield put(UserActions.setUsers(users));
            yield put(Actions.createReplySuccess(replies, response.data.id));
            answerService.isAnswer(response.data) 
                ?  yield put(AnswerActions.setAnswers(answers))
                :  yield put(Actions.setReplies(answers))

        } catch(error) {
            console.log(error);
            yield put(Actions.createReplyFail(error.response, action.payload.parentId))
        }
    })
}



export default function* root() {
    yield fork(replyAnswer)
    yield fork(voteUp)
    yield fork(loadReplies)
}