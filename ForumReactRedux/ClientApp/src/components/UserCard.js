import React from 'react';
import {Card, Statistic, Image} from 'semantic-ui-react';

const UserCard = (props) =>{
    const {name = 'lorem', date=Date.now(), answersAmount = 2222} = props || {}; 
    const year = new Date(date).getFullYear();
    return(
        <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>Joined in {year}</Card.Meta>
                <Card.Description>
                    <Statistic horizontal>
                        <Statistic.Value>{answersAmount}</Statistic.Value>
                        <Statistic.Label>Answers</Statistic.Label>
                    </Statistic>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
            </Card.Content>
        </Card>
    )
}
export default UserCard;