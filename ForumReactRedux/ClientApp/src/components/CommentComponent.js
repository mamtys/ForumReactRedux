import React from 'react';
import {Icon, Comment, Message} from 'semantic-ui-react';
import VotePanel from './VotePanel';
import CommentReplyAction from './CommentReplyAction';
import AcceptAnswer from './AcceptAnswer';


const CommentComponent = (props) => {
    const { rating, id, username, date, content, questionId, status, errorMessage, isQuestionOwner, isAccepted, children, acceptAnswer, ...rest } = props;
    const stringDate = new Date(date).toLocaleDateString();
    return(
        <Comment>
            {   
                status === 'error' &&
                <Message error> {errorMessage}</Message>
            }
            <Comment.Content>
                <Comment.Author>
                    {
                        isQuestionOwner &&
                        <AcceptAnswer id={id} questionId={questionId} acceptAnswer={acceptAnswer} active = {isAccepted}></AcceptAnswer>
                    }
                    <VotePanel rating = {rating} id = {id} {...rest}></VotePanel>
                    <Icon name='user' color='grey' style={{margin: '0'}}></Icon>
                    {username}
                </Comment.Author>
                <Comment.Metadata>
                    <div>Created at{stringDate}</div>
                </Comment.Metadata>
                <Comment.Text>
                    {content}
                </Comment.Text>
                <Comment.Actions>
                    <CommentReplyAction questionId={questionId} id={id} status = {status}/>
                </Comment.Actions>
            </Comment.Content>
            {children}
        </Comment>  
    )
}

export default  CommentComponent;
