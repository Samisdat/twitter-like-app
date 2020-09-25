import React from "react";
import {toogleLikeTweet} from "../data/appStore";

export const LikeTweet = (props) => {

    const heart = (true === props.liked) ? '♥': '♡';

    const toggleLiked = () => {

        toogleLikeTweet(props.id_str);

    };

    return (
        <span onClick={toggleLiked} style={{cursor: 'pointer'}}>
            {heart}
        </span>
    );
}
