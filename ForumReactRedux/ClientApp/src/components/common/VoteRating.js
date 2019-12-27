import React from 'react';

class VoteRating extends React.Component{
    render(){
        const {rating} = this.props;
        let ratingColor = '';

        if (ratingColor > 0){
            ratingColor = 'green'
        } 

        if (ratingColor < 0){
            ratingColor = 'green'
        } 

        if (ratingColor === 0){
            ratingColor = 'grey'
        } 

        const ratingStyle = {
            color: ratingColor
        }
        return(
            <span style = {ratingStyle}>
                {rating}
            </span>
        )
    }
}

export default VoteRating;