import React from 'react';
import {Icon} from 'semantic-ui-react';


const VoteUpIcon = (props) => {
    const {
       active,
        ...rest
    } = props;

    const style = {
        margin: '0',
    }

    return (
        <Icon 
            name = {'angle up'}
            style = {style}
            color = {active ? 'green' : 'grey'}
            {...rest}
        />
    )
}

export default VoteUpIcon;