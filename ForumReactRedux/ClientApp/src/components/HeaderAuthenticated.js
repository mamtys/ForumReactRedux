import React from 'react';
import {Menu, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const HeaderAuthenticated = (props) => {
    const {userName} = props; 
    return(
        <Menu.Item as={Link} to='/profile' position='right'>
            <Icon name='user'/>
            {userName}
        </Menu.Item>
    )
}

export default HeaderAuthenticated;
