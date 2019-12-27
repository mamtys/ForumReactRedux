import voteTypesGenerator from '../generators/constants/vote';
import loadTypesGenerator from '../generators/constants/load';

const SET_REPLIES = 'SET_REPLIES';
const CREATE_REPLY_REQUEST = 'CREATE_REPLY_REQUEST';
const CREATE_REPLY_SUCCESS = 'CREATE_REPLY_SUCCESS';
const CREATE_REPLY_FAIL = 'CREATE_REPLY_FAIL';

export default  {
    SET_REPLIES,
    CREATE_REPLY_REQUEST,
    CREATE_REPLY_SUCCESS,
    CREATE_REPLY_FAIL,
    ...voteTypesGenerator('replies'),
    ...loadTypesGenerator('replies'),
}