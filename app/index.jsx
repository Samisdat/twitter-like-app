
import {store} from "./data/store";

store.subscribe( (data) => {
    console.log(data)
});


import React from "react";
import ReactDOM from "react-dom";
import {htmlId} from "./constants";
import {ClearTweets} from "./components/ClearTweets";
import {ToogleLikedTweets} from "./components/ToogleLikedTweets";
import {LikedTweetsCounter} from "./components/LikedTweetsCounter";
import {Tweets} from "./components/Tweets";

function TwitterLikeApp(props) {
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