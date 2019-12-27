
import authService from './authService';

import {schema, normalize} from 'normalizr';

const ReplyService = {
    normalizeArray: (array) => {
        const user = new schema.Entity('user');
        const reply = new schema.Entity('reply',{
            user,
        });
        const replyList = [reply];
        return normalize(array, replyList )
    },
    loadByQuestionId: (questionId) => authService.axios('get', `questions/${questionId}/replies`),
    voteUp:  (id) => authService.axios('put', `replies/${id}/upvote`),
    voteDown: (id) => authService.axios('put', `replies/${id}/downvote`),
}

export default ReplyService;