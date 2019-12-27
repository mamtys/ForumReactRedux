import {makeTypeGenerators} from '../../utils'

const VOTE_UP_REQUEST = 'LOAD_REQUEST';
const VOTE_UP_SUCCESS = 'VOTE_UP_SUCCESS';
const VOTE_UP_FAIL = 'VOTE_UP_FAIL';

const VOTE_DOWN_REQUEST = 'VOTE_DOWN_REQUEST';
const VOTE_DOWN_SUCCESS = 'VOTE_DOWN_SUCCESS';
const VOTE_DOWN_FAIL = 'VOTE_DOWN_FAIL';


const voteTypessGenerator = (name) => makeTypeGenerators(
    name,
    {
        VOTE_UP_REQUEST,
        VOTE_UP_SUCCESS,
        VOTE_UP_FAIL,
        VOTE_DOWN_REQUEST,
        VOTE_DOWN_SUCCESS,
        VOTE_DOWN_FAIL
    }
)

export default voteTypessGenerator;