import axios from 'axios';
import config from '../config';

const VoteService = {
    load:  () => axios.get(`${config.server.host}/questions`),
    upVote:  (id) => axios.put(`${config.server.host}/questions/${id}/upvote`),
    downVote: (id) => axios.put(`${config.server.host}/questions/${id}/downvote`),
}

export default VoteService;