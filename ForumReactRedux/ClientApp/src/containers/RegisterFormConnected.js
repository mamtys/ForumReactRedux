import React from 'react';
import {connect} from 'react-redux';
import RegisterForm from '../components/RegisterForm';

import AuthActions from '../redux/actions/auth';


class RegisterFormConnected extends React.Component{
    handleSubmit = (e) =>{
        e.preventDefault();
        const login = e.target['register__login'].value;
        const password = e.target['register__password'].value;
        this.props.register(login, password);
    }

    render(){
        return(
            <RegisterForm onSubmit = {this.handleSubmit} {...this.props}/>
        )
    }
}

const mapStateToProps = (state) =>{
    const auth = state.auth;
    return{
        status: auth.register.status,
        errorMessage: auth.register.message,
    }
}

const mapDispatchToProps = {
    register: AuthActions.register
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterFormConnected)