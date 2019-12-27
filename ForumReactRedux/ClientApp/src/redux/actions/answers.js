import voteActionsGenerator from '../generators/actions/vote';
import loadActionsGenerator from '../generators/actions/load';

import answerTypes from '../constants/answers';

import Services from '../../services/requestService';

const VoteActions = voteActionsGenerator(answerTypes);
const LoadActions = loadActionsGenerator(answerTypes);


const setAnswers = (answers) => {
    return {
        type: answerTypes.SET_ANSWERS,
        payload: answers
    }
}

const createAnswerRequest = (path) => (questionId, content, userId) => {
    return {
        type: answerTypes.CREATE_ANSWER_REQUEST,
        payload:{
            questionId
        },
        promice: () => Services.post(path)({questionId, content, userId})
    }
}


const createAnswerSuccess = (response, id) => {
    return {
        type: answerTypes.CREATE_ANSWER_SUCCESS,
        payload: response,
        id
    }
}

const createAnswerFail = (error, id) => {
    return {
        type: answerTypes.CREATE_ANSWER_FAIL,
        error,
        id
    }
}

export default  {
    createAnswerRequest: createAnswerRequest('api/answers'),
    createAnswerSuccess,
    createAnswerFail,
    setAnswers,
    ...VoteActions,
    ...LoadActions,
}


