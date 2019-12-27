import voteActionsGenerator from '../generators/actions/vote';
import loadActionsGenerator from '../generators/actions/load';
import replyTypes from '../constants/replies';

import Services from '../../services/requestService';

const VoteActions = voteActionsGenerator(replyTypes);
const LoadActions = loadActionsGenerator(replyTypes);



const setReplies = (replies) => {
    return{
        type: replyTypes.SET_REPLIES,
        payload: replies
    }
}

const createReplyRequest = (path) => (questionId, content, parentId) => {
    return {
        type: replyTypes.CREATE_REPLY_REQUEST,
        payload:{
            parentId,
            questionId
        },
        promice: () => Services.post(path)({questionId, content, parentId})
    }
}

const createReplySuccess = (response, id) => {
    return {
        type: replyTypes.CREATE_REPLY_SUCCESS,
        payload: response,
        id
    }
}

const createReplyFail = (error, id) => {
    return {
        type: replyTypes.CREATE_REPLY_FAIL,
        error,
        id
    }
}


export default  {
    createReplyRequest: createReplyRequest('answers'),
    createReplySuccess,
    createReplyFail,
    setReplies,
    ...VoteActions,
    ...LoadActions,
}
