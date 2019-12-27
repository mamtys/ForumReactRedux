
import { combineReducers }  from 'redux';
import questionsReducer from './questions';
import answersReducer from './answers'
import replyReducer from './replies';
import userReducer from '../reducers/users';
import authReducer from './auth';

const rootReducer = combineReducers({
    questions: questionsReducer,
    answers: answersReducer,
    replies: replyReducer,
    auth: authReducer,
    users: userReducer
})

export default rootReducer;