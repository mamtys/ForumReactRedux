import React from 'react';
import {connect} from 'react-redux';
import {Comment, Message} from 'semantic-ui-react';

import CommentComponent from '../components/CommentComponent';

import replyActions from '../redux/actions/replies';


class Reply extends React.Component{
    renderReplies(idList){
        const replies = idList.map(id=><ConnectedReply key={id} id={id}/>);
        return replies.length 
            ? <Comment.Group>{replies}</Comment.Group>
            : <></>
    }

    render(){
        const {reply:{upVotes, downVotes, createdAt:date, reply:replyIds = [], ...restReply}, voteUp, voteDown} = this.props;
        const {userName} = this.props.user;
        const rating = upVotes - downVotes;
        const replies = this.renderReplies(replyIds);

        return <>
            <CommentComponent 
                rating = {rating} 
                date = {date} 
                username={userName} 
                {...restReply} 
                voteUp={voteUp} 
                voteDown={voteDown}
            >
                {replies}
            </CommentComponent>
        </>
    }
}

const mapStateToProps = (state, ownProps) =>{
    const reply = state.replies.byId[ownProps.id] || {};
    return {
        reply,
        user:  state.users.byId[reply.userId] || {},
        errorMessage: state.replies.status[ownProps.questionId]
    }
}


const mapDispatchToProps = {
    voteUp: replyActions.voteUpRequest,
    voteDown: replyActions.voteDownRequest,
}


var ConnectedReply =  connect(mapStateToProps, mapDispatchToProps)(Reply);
export default ConnectedReply; 