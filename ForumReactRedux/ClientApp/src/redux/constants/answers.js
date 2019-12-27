
import loadTypesGenerator from '../generators/constants/load';
import voteTypesGenerator from '../generators/constants/vote';


const SET_ANSWERS = 'SET_ANSWERS';
const CREATE_ANSWER_REQUEST = 'CREATE_ANSWER_REQUEST';
const CREATE_ANSWER_SUCCESS = 'CREATE_ANSWER_SUCCESS';
const CREATE_ANSWER_FAIL = 'CREATE_ANSWER_FAIL';

export default  {
    ...loadTypesGenerator('answers'),
    ...voteTypesGenerator('answers'),
    CREATE_ANSWER_REQUEST,
    CREATE_ANSWER_SUCCESS,
    CREATE_ANSWER_FAIL,
    SET_ANSWERS,
}