import React from "react";
import {toogleLikeTweet} from "../data/appStore";

export const LikeTweet = (props) => {

    const heart = (true === props.liked) ? '♥': '♡';

    const toogleLiked = () => {

        toogleLikeTweet(props.id_str);

    };

    return (
        <span onClick={toogleLiked} style={{cursor: 'pointer'}}>
            {heart}
        </span>
    );
}
