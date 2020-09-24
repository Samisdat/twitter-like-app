
import {appStore} from "./data/appStore";

import React, { useState, useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import {htmlId} from "./constants";
import {ClearTweets} from "./components/ClearTweets";
import {ToogleLikedTweets} from "./components/ToogleLikedTweets";
import {LikedTweetsCounter} from "./components/LikedTweetsCounter";
import {Tweets} from "./components/Tweets";

function TwitterLikeApp(props) {

    const [store, setStore] = useState(appStore.getValue());

    useLayoutEffect(()=> {
        appStore.subscribe(setStore);
    },[]);

    return (
        <React.Fragment>
            <ClearTweets></ClearTweets>
            <LikedTweetsCounter></LikedTweetsCounter>
            <ToogleLikedTweets></ToogleLikedTweets>
            <Tweets tweets={store.tweets}></Tweets>
        </React.Fragment>
    );
}

let appHtmlElement = document.getElementById(htmlId);

ReactDOM.render(<TwitterLikeApp />, appHtmlElement);