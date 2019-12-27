import authService from './authService';
import {schema, normalize} from 'normalizr';

const QuestionService = {
    normalizeArray: (array) => {
        const user = new schema.Entity('users');
        const questionSchema = new schema.Entity('questions',{
            user,
        });
        const questionListSchema = [questionSchema];
        return normalize(array, questionListSchema)
    },
    normalizeEntity: (array) => {
        const user = new schema.Entity('users');
        const answerReply = new schema.Entity('replies',{
            user,
        });
        const answer = new schema.Entity('answers', {
            reply: [answerReply],
            user,
        });
        const question = new schema.Entity('question', {
            answers: [answer],
            user
        });
        const normalizedData = normalize(array, question);
        return normalizedData;
    },
    acceptAnswer: (questionId, answerId) => authService.axios('put', `questions/${questionId}/accept`, {answerId}),
    load: () => authService.axios('get', `api/questions/`),
    loadOne: (id) => authService.axios('get', `api/questions/${id ? id : ''}`),
    post: (data) => authService.axios('post', 'api/questions', data),
    voteUp: (id) => authService.axios('put', `api/questions/${id}/upvote`),
    voteDown: (id) => authService.axios('put', `api/questions/${id}/downvote`),

}

export default QuestionService;