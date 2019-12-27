import React from 'react';
import {connect} from 'react-redux';
import {Message} from 'semantic-ui-react';
import ReplyFrom from '../components/ReplyForm';

import ReplyActions from '../redux/actions/replies';


class ReplyAnswerFormConnected extends React.Component{
    handleSubmit = (e) =>{
        e.preventDefault();
        const {questionId, id:parentId} = this.props;
        const content = e.target['comment__reply'].value;
        this.props.reply(questionId, content, parentId);
    }

    render(){
        const {status, errorMessage} = this.props;
        return(
            <>
                {   
                    status==='error' &&
                    <Message error>
                        {errorMessage}
                    </Message>
                }
                <ReplyFrom onSubmit = {this.handleSubmit} {...this.props}/>
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    const {status, message} = state.replies.status[ownProps.id] || {};
    return{
        status,
        errorMessage: message,
    }
}

const mapDispatchToProps = {
    reply: ReplyActions.createReplyRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(ReplyAnswerFormConnected);