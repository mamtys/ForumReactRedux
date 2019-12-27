import userTypes from '../constants/users';
import loadActionsGenerator from '../generators/actions/load';

const LoadActions = loadActionsGenerator(userTypes);

const setUsers = (byId, allIds = []) => {
    return {
        type: userTypes.SET_USERS,
        payload: {
            byId,
            allIds
        }
    }
}

export default {
    setUsers,
    ...LoadActions
}