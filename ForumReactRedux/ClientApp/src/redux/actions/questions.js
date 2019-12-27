import voteActionsGenerator from '../generators/actions/vote';
import loadActionsGenerator from '../generators/actions/load';
import questionTypes from '../constants/questions';

const VoteActions = voteActionsGenerator(questionTypes);
const LoadActions = loadActionsGenerator(questionTypes);

const setQuestions = (byId, allIds = []) => {
    return {
        type: questionTypes.SET_QUESTIONS,
        payload: {
            byId,
            allIds
        }
    }
}

const acceptAnswerRequest = (questionId, answerId) => ({
    type: questionTypes.ACCEPT_ANSWER_REQUEST,
    payload: {
        questionId,
        answerId
    }
})

const acceptAnswerSuccess = (byId) => ({
    type: questionTypes.ACCEPT_ANSWER_SUCCESS,
    payload: {
        byId
    }
})

const acceptAnswerFail = (error) => ({
    type: questionTypes.ACCEPT_ANSWER_FAIL,
    error
})

export default  {
    acceptAnswerRequest,
    acceptAnswerFail,
    acceptAnswerSuccess,
    setQuestions,
    ...VoteActions,
    ...LoadActions
}
