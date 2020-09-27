import React from 'react';

import {Button} from 'react-bootstrap'

export const ClearTweets = (props) => {

    const disabled = (0 === props.numberOfTweets) ? 'disabled' : '';

    return (
        <Button disabled={disabled} variant='danger' onClick={props.resetStore}>Clear tweets</Button>
    );
}
