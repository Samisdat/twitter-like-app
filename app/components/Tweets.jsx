import React from "react";
import {Tweet} from "./Tweet";

export function Tweets(props) {

    return (
        <ul>
            {props.tweets.map((value) => {
                return <Tweet {...value}></Tweet>
            })}
        </ul>
    );
}
