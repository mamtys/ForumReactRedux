import React from 'react';
import {Grid, Segment, Header} from 'semantic-ui-react';
import './css/modifiers.css'

class PostRecord extends React.Component{
    render(){
        const {type='answer', rating='+200', header='loremHeader', id = 1, questionId = 1, date} = this.props;
        const shortType = type[0];
        const link = type === 'question' 
            ? `/${type}s/${id}`
            : `/${type}s/${questionId}#${id}`

        const datePublished = new Date().toLocaleString();
        return(
            <Grid.Row className = 'flex-row'>
                <div className='flex-row__item'>
                    {shortType}
                </div>
                <div className='flex-row__item'>
                    {rating}
                </div>
                <div className='flex-row__item flex-greedy'>
                   <a href={link}>
                        {header}
                    </a>
                </div>
                <div className='flex-row__item'>
                    {datePublished}
                </div>
            </Grid.Row>  
        )
    }
}

export default PostRecord;