import React from "react";

import {Button} from 'react-bootstrap'

export function ClearTweets(props) {
    
    const disabled = (0 === props.numberOfTweets) ? 'disabled' : '';

    return (
        <Button disabled={disabled} variant="danger" onClick={props.clearTweetsInStore} >Clear tweets</Button>
    );
}
