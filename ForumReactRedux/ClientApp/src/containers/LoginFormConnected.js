import React from 'react';
import {connect} from 'react-redux';
import LoginForm from '../components/LoginForm';

import AuthActions from '../redux/actions/auth';


class LoginFormConnected extends React.Component{
    handleSubmit = (e) =>{
        e.preventDefault();
        const login = e.target['login__login'].value;
        const password = e.target['login__password'].value;
        this.props.login(login, password);
    }

    render(){
        return(
            <LoginForm onSubmit = {this.handleSubmit} {...this.props}/>
        )
    }
}

const mapStateToProps = (state) =>{
    const auth = state.auth;
    return{
        status: auth.login.status,
        errorMessage: auth.login.message,
    }
}

const mapDispatchToProps = {
    login: AuthActions.login
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormConnected)