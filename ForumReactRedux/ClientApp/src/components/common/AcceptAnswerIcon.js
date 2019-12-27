import React from 'react';
import {Icon} from 'semantic-ui-react';

const AcceptAnswerIcon = (props) => {
    const {
        active,
        ...rest
    } = props;

    const style = {
        margin: '0',
    }

    return (
        <Icon 
            name = {'star'}
            style = {style}
            color = {active ? 'green' : 'grey'}
            {...rest}
        />
    )
}

export default AcceptAnswerIcon;