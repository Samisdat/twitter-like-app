import React from "react";

export function Tweet(props) {

    return (
        <div>
            <h1>{props.account}</h1>
            <p>{props.content}</p>
            <div>{props.timestamp}</div>
        </div>
    );
}
