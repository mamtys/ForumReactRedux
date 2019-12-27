import React from 'react';
import {connect} from 'react-redux';
import {Grid, Container, Item, Segment, Form, Header, Divider, Button, Loader, Message} from 'semantic-ui-react';

import QuestionHeader from '../components/QuestionHeader';
import Answers from '../components/AnswerList';
import CreateAnswerForm from './CreateAnswerForm';
import questionActions from '../redux/actions/questions';
import answerActions from '../redux/actions/answers';


class QuestionPage extends React.Component{
    componentDidMount(){
        // if (!this.props.question.id){
        //     this.props.loadOne()
        // }
        this.props.loadOne();
        this.props.loadAnswers();
    }

    render(){
        const {id} = this.props.match.params || this.props;
        const {answers:answerIds=[], userId, acceptedId, status:questionStatus} = this.props.question || {};
        const {errorMessage, user:{id:authedUserId, userName, ...restUserProps}} = this.props;

        const isQuestionOwner = authedUserId === userId ? true : false;
        return(
            <Container>
                {
                    this.props.status === 'error' &&
                    <Message error>{errorMessage}</Message>      
                }
                {
                    this.props.status === 'loading' 
                    ?  <Loader active/>
                    :  <>
                        <QuestionHeader 
                            {...restUserProps}
                            username={userName}
                            {...this.props.question}
                            onError = {this.props.status === 'error' ?  <Message error/> : null}
                            onLoading = {this.props.status === 'loading' ?  <Loader active/> : null}
                        />
                        <Container>
                            <Answers isQuestionOwner={isQuestionOwner} questionId={id} answerIds={answerIds} acceptedId={acceptedId}/>
                        </Container>
                        <Divider></Divider>
                        <CreateAnswerForm questionId={id} questionStatus = {questionStatus}>
                            <Header>Input Your Answer</Header>
                        </CreateAnswerForm>
                    </>
                }
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    const {id} = ownProps.match.params;
    const question = (state.questions.byId || {})[id] || {};
    const {message} = state.questions.status || {};
    return {
        question,
        user: (state.auth.user || {}),
        status: state.questions.status.load,
        errorMessage: message,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {id} = ownProps.match.params;
    return { 
       loadOne: () => dispatch(questionActions.loadOne(id)),
       loadAnswers: () => dispatch(answerActions.load(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);








