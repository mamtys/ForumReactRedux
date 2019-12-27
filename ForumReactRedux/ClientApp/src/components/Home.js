import React from 'react';
import {Grid, Container, Header, Divider, Segment, Button, Icon} from 'semantic-ui-react'


class Home extends React.Component{
    render(){
        return(   
            <Segment 
                textAlign='center'
                style={{ minHeight: 700, padding: '1em 0em' }}
                vertical
                inverted
            >
                <Container text>
                    <Header
                        as='h1'
                        content='Imagine-a-Company'
                        inverted
                        style={{
                            //fontSize: mobile ? '2em' : '4em',
                            fontSize: '4em',
                            fontWeight: 'normal',
                            marginBottom: 0,
                            marginTop: '3em',
                            //marginTop: mobile ? '1.5em' : '3em',
                        }}
                    />
                    <Header
                        as='h2'
                        content='Do whatever you want when you want to.'
                        inverted
                        style={{
                            //fontSize: mobile ? '1.5em' : '1.7em',
                            fontWeight: 'normal',
                            // marginTop: mobile ? '0.5em' : '1.5em',
                        }}
                    />
                    <Button primary size='huge'>
                        Get Started
                    <Icon name='right arrow' />
                    </Button>
                </Container>
            </Segment>
        )
    }
}

export default  Home;