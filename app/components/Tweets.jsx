import React from "react";
import {Tweet} from "./Tweet";

export function Tweets(props) {

    return (
        <ul>
            {props.tweets.map((value, idx) => {
                return <Tweet key={idx} {...value}></Tweet>
            })}
        </ul>
    );
}
