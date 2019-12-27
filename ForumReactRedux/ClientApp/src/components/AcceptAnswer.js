import React from 'react';
import AcceptAnswerIcon from './common/AcceptAnswerIcon';


class AcceptAnswer extends React.Component{
    state = {
        isClicked: null,
    }

    handleClick = (e) => {
        this.setState(prevProps=>({
            isClicked: !prevProps.isClicked
        }))

        if (this.props.acceptAnswer)
            this.props.acceptAnswer(this.props.questionId, this.props.id);
    }

    render = () =>{
        const {isClicked} = this.state;
        const {active} = this.props;
        return <>
            <AcceptAnswerIcon 
                onClick={this.handleClick}
                active={active}
                //className={isClicked ? 'rotate' : ''}
            />
        </>
    }
}



export default AcceptAnswer;
