import React from 'react';
import ReplyForm from '../containers/CreateReplyFormConnected';
import {Comment} from 'semantic-ui-react';

class CommentReplyAction extends React.Component {
    state = {
        isVisible: false
    }

    handleReplyClick = (e) => {
        this.setState(prevState => ({
            isVisible: !prevState.isVisible
        }));
    }

    
    render = ({isVisible} = this.state) => <>
        <Comment.Action onClick={this.handleReplyClick}>
            Reply
        </Comment.Action>
        {   
            isVisible &&   
            <ReplyForm {...this.props}/>
        }
    </>
}

export default CommentReplyAction;