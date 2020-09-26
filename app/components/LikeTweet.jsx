import React from "react";

export const LikeTweet = (props) => {

    const heart = (true === props.liked) ? '♥': '♡';
    return (
        <span>
            {heart}
        </span>
    );
}
