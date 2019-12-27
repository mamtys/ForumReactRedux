import React from 'react';
import {Button, Loader} from 'semantic-ui-react';

const LoadingButton = (props) => {
    const {status, content, children, ...rest} = props;
    return (
        <Button
            content={<>
                {content}
                {children}
                {
                    status==='loading' &&
                    <Loader as='i' active inline size='tiny'/>
                }
            </>}
            {...rest}
        />
    )
}

export default LoadingButton;
