import React from 'react';
import {connect} from 'react-redux';
import {Menu, Modal, Button} from 'semantic-ui-react';
import AuthModal from '../components/AuthModal';
import HeaderAuthenticated from '../components/HeaderAuthenticated';

import AuthService from '../services/authService';

class AuthSwitcher extends React.Component{
    render() {
        console.log(AuthService.isLogged());
        return(
            <>
                {
                    AuthService.isLogged() 
                        ? <HeaderAuthenticated {...this.props.user}/>
                        : <AuthModal/>
                }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
    }
}

export default connect(mapStateToProps)(AuthSwitcher)


