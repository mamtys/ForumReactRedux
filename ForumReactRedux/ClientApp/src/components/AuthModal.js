import React from 'react';
import {Menu, Modal, Button} from 'semantic-ui-react';
import LoginFormConnected from '../containers/LoginFormConnected';
import RegisterFormConnected from '../containers/RegisterFormConnected';

class AuthModal extends React.Component{
    render(){
        return(
            <Menu.Item position='right'>
                <Modal 
                size='small'
                trigger = { 
                    <Button as='a' inverted>
                        Log in
                    </Button>
                }>
                    <LoginFormConnected />
                </Modal>
                            
                <Modal trigger = { 
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                        Sign Up
                    </Button>
                }>
                    <RegisterFormConnected />
                </Modal>
            </Menu.Item>
        )
    }
}



export default AuthModal;