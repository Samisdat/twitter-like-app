import React from "react";

import {Button} from 'react-bootstrap'

export function ClearTweets(props) {

    return (
        <Button variant="danger" onClick={props.clearTweetsInStore}>Clear tweets</Button>
    );
}
