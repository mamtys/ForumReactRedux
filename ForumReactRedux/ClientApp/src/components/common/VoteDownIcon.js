import React from 'react';
import {Icon} from 'semantic-ui-react';


const VoteDownIcon = (props) => {
    const {
        active,
        ...rest
    } = props;

    const style = {
        margin: '0',
    }

    return (
        <Icon 
            name = {'angle down'}
            style = {style}
            color = {active ? 'red' : 'grey'}
            {...rest}
        />
    )
}

export default VoteDownIcon;