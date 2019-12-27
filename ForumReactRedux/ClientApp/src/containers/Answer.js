import React from 'react';
import {connect} from 'react-redux';
import {Comment} from 'semantic-ui-react';

import Reply from './Reply';
import CommentComponent from '../components/CommentComponent';
import AuthService from '../services/authService';

import answerActions from '../redux/actions/answers';
import questionActions from '../redux/actions/questions';

class Answer extends React.Component{
    renderReplies(idList){
        const replies = idList.map(id=><Reply key={id} id={id}/>);
        return replies.length 
            ? <Comment.Group>{replies}</Comment.Group>
            : <></>
    }

    render(){
        const {
            answer:{upVotes, downVotes, createdDate:date, reply:replyIds = [], userId, ...answerRest},
            user:{login},
            ...rest
        } = this.props;
        const rating = upVotes - downVotes;
        const replies = this.renderReplies(replyIds);
        const isAnswerOwner = this.props.user.id === userId ? true : false;
        return <>
            <CommentComponent 
                rating = {rating} 
                date = {date} 
                username={login} 
                isOwner = {isAnswerOwner} 
                {...rest} 
                {...answerRest}
            >
                {replies}
            </CommentComponent>
        </>
    }
}

const mapStateToProps = (state, ownProps) =>{
    const answer = state.answers.byId[ownProps.id];
    const userId = answer.userId;
    return {
        answer: state.answers.byId[ownProps.id],
        user: state.users.byId[userId],
        errorMessage: state.answers.status[ownProps.questionId]
    }
}

const mapDispatchToProps = {
    acceptAnswer: questionActions.acceptAnswerRequest,
    voteUp: answerActions.voteUpRequest,
    voteDown: answerActions.voteDownRequest,
}



export default connect(mapStateToProps, mapDispatchToProps)(Answer);