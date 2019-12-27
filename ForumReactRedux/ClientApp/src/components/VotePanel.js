import React from 'react';

import VoteRating from './common/VoteRating';
import VoteDownIcon from './common/VoteDownIcon';
import VoteUpIcon from './common/VoteUpIcon';


class VotePanel extends React.Component{
    state = {
        active: null,
    }
    handleVoteUpClick = (e, {id, name}) => {
        this.setState({
            active: name
        })

        this.props.voteUp(id);
    }

    handleVoteDownClick = (e, {id, name}) => {
        this.setState({
            active: name
        })
        this.props.voteDown(id);
    }

    render = ({rating, id, active} = this.props) =>{
        return <>
            <VoteRating rating = {rating}/>
            <VoteUpIcon 
                id = {id}
                active = {this.state.active === 'angle up'}
                onClick={this.handleVoteUpClick}
            ></VoteUpIcon>
            <VoteDownIcon
                id = {id}
                active = {this.state.active === 'angle down'}
                onClick={this.handleVoteDownClick}
            ></VoteDownIcon>
        </>
    }
}

export default VotePanel;
