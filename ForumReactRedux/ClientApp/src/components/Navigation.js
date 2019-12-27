import React from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const Navigation = (props) => (
    <>
        <Menu.Item as={Link} to='/' header>
            Project Name
        </Menu.Item>
        <Menu.Item as={Link} to='/questions'  header>
            Questions
        </Menu.Item>
    </>
)

export default Navigation;