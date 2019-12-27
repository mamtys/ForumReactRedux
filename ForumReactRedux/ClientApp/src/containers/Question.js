import React from 'react';
import {connect} from 'react-redux'
import {Grid, Header, Segment, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';


class Question extends React.Component{
    render(){
        const {id, upVotes, downVotes, answersAmount = 0, header = 'Header', content, username='admin'} = this.props;
        const date = new Date;
        const rating = upVotes - downVotes;
        return(
            <Grid.Row>
                <Grid.Column width={2} textAlign='center' verticalAlign='middle'>
                    {rating}
                    <div>rating</div>
                    {answersAmount}
                    <div>answers</div>
                </Grid.Column>
                <Grid.Column width={14}>
                    <Header size='medium' >
                        <Link to={`/questions/${id}`}>{header}</Link>
                    </Header>
                    <div>
                        {content}
                    </div>
                    <Grid>
                        <Grid.Column textAlign='right'>
                            <div>by {username}</div>
                            <div>at {date.toLocaleString()}</div>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid.Row>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    return {
        ...state.questions.byId[ownProps.id],
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Question);