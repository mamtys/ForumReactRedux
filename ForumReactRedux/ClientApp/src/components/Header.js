import React from 'react';
import {
    Menu,
    Container,
} from 'semantic-ui-react';

import Navigation from './Navigation';
import AuthSwitcher from '../containers/HeaderAuthSwitcher';

class Header extends React.Component{
    render(){
        return(
            <>
                <Menu fixed='top' inverted>
                    <Container>
                        <Navigation/>
                        <AuthSwitcher/>
                    </Container>
                </Menu>
                <div style={{height: '48px'}}></div>
            </>
        )
    }
}

export default Header;