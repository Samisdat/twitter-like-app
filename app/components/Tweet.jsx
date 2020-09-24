import React from "react";
import moment from "moment";

export function Tweet(props) {

    const ago = moment(props.timestamp).format('HH:mm:ss');

    return (
        <div>
            <h1>{props.account}</h1>
            <p>{props.content}</p>
            <div>{ago}</div>
        </div>
    );
}
