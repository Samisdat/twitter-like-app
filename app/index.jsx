/** taking care on data later data
import {tweets} from "./data/mock-tweets";

tweets.subscribe(
    console.log.bind(console)
);*/

import React from "react";
import ReactDOM from "react-dom";

function TwitterLikeApp() {

    return (
        <React.Fragment>
            <h1>Hello from react</h1>
        </React.Fragment>
    );
}

let appHtmlElement = document.getElementById('twitter-like-app');

ReactDOM.render(<TwitterLikeApp />, appHtmlElement);