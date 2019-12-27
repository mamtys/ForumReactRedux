import axios from 'axios';
import config from '../config';
import authService from './authService';


const RequestService = {
    load: (path) => (id) => authService.axios('get', `${path}/${id ? id : ''}`),
    post: (path) => (data) => authService.axios('post', path, data),
    voteUp:  (path, id) => authService.axios('put', `/${path}/${id}/upvote`),
    voteDown: (path, id) => authService.axios('put', `/${path}/${id}/downvote`),
}

export default RequestService;