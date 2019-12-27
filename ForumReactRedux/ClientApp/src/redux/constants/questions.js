import loadTypesGenerator from '../generators/constants/load';

const SET_QUESTIONS = 'SET_QUESTIONS'
const ACCEPT_ANSWER_REQUEST = 'ACCEPT_ANSWER_REQUEST';
const ACCEPT_ANSWER_SUCCESS = 'ACCEPT_ANSWER_SUCCESS';
const ACCEPT_ANSWER_FAIL = 'ACCEPT_ANSWE_FAIL';
export default  {
    ...loadTypesGenerator('questions'),
    SET_QUESTIONS,
    ACCEPT_ANSWER_REQUEST,
    ACCEPT_ANSWER_SUCCESS,
    ACCEPT_ANSWER_FAIL
}
