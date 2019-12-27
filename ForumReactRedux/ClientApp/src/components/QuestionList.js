import React from 'react';
import {Grid, Container, Segment, Header, Menu, Divider, Loader} from 'semantic-ui-react'
import Question from '../containers/Question';

const QuestionList = (props) =>{
    const {Ids = []} = props;
    const questions = Ids.map(id=><Question key={id} id={id}/>)
    const content = questions.length 
        ? <Grid celled>{questions}</Grid>
        : <Segment> no content</Segment>
    return(
        <Container>
            <Segment>
                <Header>All Questions</Header>
                <Menu compact  >
                    <Menu.Item as='a'>Newest</Menu.Item>
                    <Menu.Item as='a'>Active</Menu.Item>
                </Menu>
            </Segment>
            { props.status === 'loading' 
                ? <Loader active></Loader>
                : content
            }
        </Container>
    )
}

export default QuestionList;