/** taking care on data later data
import {tweets} from "./data/mock-tweets";

tweets.subscribe(
    console.log.bind(console)
);*/

import React from "react";
import ReactDOM from "react-dom";
import {htmlId} from "./constants";
import {ClearTweets} from "./components/ClearTweets";
import {ToogleLikedTweets} from "./components/ToogleLikedTweets";
import {LikedTweetsCounter} from "./components/LikedTweetsCounter";
import {Tweets} from "./components/Tweets";

function TwitterLikeApp() {

    return (
        <React.Fragment>
            <ClearTweets></ClearTweets>
            <LikedTweetsCounter></LikedTweetsCounter>
            <ToogleLikedTweets></ToogleLikedTweets>
            <Tweets></Tweets>
        </React.Fragment>
    );
}

let appHtmlElement = document.getElementById(htmlId);

ReactDOM.render(<TwitterLikeApp />, appHtmlElement);