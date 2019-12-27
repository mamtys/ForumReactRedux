import loadTypesGenerator from '../generators/constants/load';


const SET_USERS = 'SET_USERS';


export default  {
    ...loadTypesGenerator('users'),
    SET_USERS,
}