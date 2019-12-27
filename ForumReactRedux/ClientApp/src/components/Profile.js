import React from 'react';
import {Grid, Container, Header, Divider, Segment, Card, Statistic, Image, Icon, Menu, MenuItem} from 'semantic-ui-react'
import PostRecords from './PostRecordList';
import UserCard from './UserCard';
import UserStatistics from './UserStatistics';

class Profile extends React.Component{
    
    render(){
        const card = UserCard(this.props.userInfo);
        const rating = UserStatistics(this.props.userInfo);
  
        return(
            <Container style = {{marginTop: '20px'}}>
                <Grid>
                    <Grid.Column width={4}>
                        {card}
                    </Grid.Column>  
                    <Grid.Column width = {12} >
                        {rating}
                        <PostRecords />
                    </Grid.Column>       
                </Grid>
            </Container>
                
        )
    }
}

export default Profile;