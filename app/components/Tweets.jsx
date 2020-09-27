import React from 'react';
import {Tweet} from './Tweet';

export const Tweets = (props) => {

    return (
        <React.Fragment>
            {props.tweets.map((tweet) => {
                return <Tweet key={tweet.id_str} {...tweet}></Tweet>
            })}
        </React.Fragment>
    );
}
