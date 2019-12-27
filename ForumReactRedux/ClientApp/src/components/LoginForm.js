import React from 'react';
import { Button, Form, Grid, Header, Message, Segment, Loader } from 'semantic-ui-react'

const LoginForm = (props) =>{
    const {onSubmit, status, errorMessage} = props;
    return(
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                Log-in to your account
            </Header>
            {   
                status==='error' &&
                <Message error>
                    {errorMessage}
                </Message>
            }
            <Form size='large' onSubmit={onSubmit}>
                <Segment stacked>
                    <Form.Input 
                        id={'login__login'} 
                        fluid 
                        icon='user' 
                        autoComplete='username email'
                        iconPosition='left' 
                        placeholder='E-mail address or username' />
                    <Form.Input
                        id={'login__password'}
                        fluid
                        autoComplete='current-password'
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                    />
                
                    <Button type='submit' color='teal' size='large'>
                        Login
                        {
                            status==='loading' &&
                            <Loader as='i' active inline size='tiny'/>
                        }
                    </Button>
                </Segment>
            </Form>
            <Message>
                New to us? <a href='/register'>Sign Up</a>
            </Message>
            </Grid.Column>
        </Grid>
    )
}

export default LoginForm;