
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

    const clearTweetsInStore = () => {

        const nextState = {
            ...appStore.getValue(),
            tweets: []
        };

        appStore.next(nextState);

    };

    return (
        <React.Fragment>
            <LikedTweetsCounter></LikedTweetsCounter>
            <ToogleLikedTweets></ToogleLikedTweets>
            <Tweets tweets={store.tweets}></Tweets>
                            <ClearTweets clearTweetsInStore={clearTweetsInStore}></ClearTweets>
        </React.Fragment>
    );
}

let appHtmlElement = document.getElementById(htmlId);

ReactDOM.render(<TwitterLikeApp />, appHtmlElement);