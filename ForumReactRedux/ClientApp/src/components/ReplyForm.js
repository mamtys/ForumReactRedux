import React from 'react';
import {Form, Message} from 'semantic-ui-react';

import LoadingButton from './common/LoadingButton';

const ReplyForm = (props) => {
    const {onSubmit, status, content} = props;
    return (
        <Form reply onSubmit={onSubmit}>
            <Form.TextArea id='comment__reply'/>
            <LoadingButton
                labelPosition='left'
                icon='edit'
                type='submit'
                primary
                content={content ||'Add Reply'}
                status={status}
            />
        </Form>
    )
}

export default ReplyForm;