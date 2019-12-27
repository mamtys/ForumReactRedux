
/**@param enchanter reducer function without default */
export const withEnchanter = (reducer, enchanter) => (state, action) =>{
        const encanterState = enchanter(state, action);

        return encanterState
            ? encanterState
            : reducer(state, action)
}

export const makeActionCreators = (name, actionCreators) => {
    return Object.keys(actionCreators).reduce((result, key)=>{
        result[key] = actionCreators[key](name);
        return result;
    }, {})
}

export const makeTypeGenerators = (name, types) => {
    return Object.keys(types).reduce((result, key)=>{
        result[key] = typeGenerator(key, name);
        return result;
    }, {})
}


export const typeGenerator = (type, name) => `${type}_${name}`



