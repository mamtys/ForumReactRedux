import {makeTypeGenerators} from '../../utils'

const LOAD_REQUEST = 'LOAD_REQUEST';
const LOAD_ONE_REQUEST = 'LOAD_ONE_REQUEST';
const LOAD_ONE_SUCCESS = 'LOAD_ONE_SUCCESS';
const LOAD_ONE_FAIL = 'LOAD_ONE_FAIL';
const LOAD_SUCCESS = 'LOAD_SUCCESS';
const LOAD_FAIL = 'LOAD_FAIL';


const loadTypessGenerator = (name) => makeTypeGenerators(
    name,
    {
        LOAD_REQUEST,
        LOAD_ONE_REQUEST,
        LOAD_ONE_SUCCESS,
        LOAD_ONE_FAIL,
        LOAD_SUCCESS,
        LOAD_FAIL
    }
)

export default loadTypessGenerator;