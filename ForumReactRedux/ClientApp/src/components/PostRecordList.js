import React from 'react';
import {Menu, Segment, Grid, Divider} from 'semantic-ui-react';
import PostRecord from './PostRecord'; 

class PostRecordList extends React.Component{
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render(){
        const { activeItem = 'All'} = this.state || {};

        const {IdList = [1,2,3]} = this.props;
        const records = IdList.map(id=><PostRecord key={id} id={id}/>)

        const content = records.length 
            ? records
            : 'no content'
            
        return(
            <>
            <Menu pointing secondary>
                <Menu.Item header >
                    Posts
                </Menu.Item>
                <Menu.Item 
                    name = 'All' 
                    position='right' 
                    active={activeItem === 'All'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item 
                    name = 'Aswers' 
                    onClick={this.handleItemClick}
                    active={activeItem === 'Aswers'}
                />
                <Menu.Item 
                    name = 'Questions' 
                    onClick={this.handleItemClick}
                    active={activeItem === 'Questions'}
                />
            </Menu>
            <Grid divided = 'vertically'>
                {content}
                <Grid.Row/>
            </Grid>
            </>
        )
    }
}

export default PostRecordList;

