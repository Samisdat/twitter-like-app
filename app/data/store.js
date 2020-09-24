import {BehaviorSubject} from 'rxjs';
import {tweets} from "./mock-api";

/**
 * my components should not know about the "api" at all
 * So let's subscribe to the api
 * every tweet is added to datastore
 * then I reduce this to tweets newer then tweetMaxAgeSeconds
 * then I order date descending
 */

export const store = new BehaviorSubject();

// screams for an interface
const firstState = {
    tweets: [],
    toogle: 'all',
};

store.next(firstState);

const poorMansTweetReducer = (tweet) => {
    return true;
};

const poorMansTweetOrdering = (tweetA, tweetB) => {
    return 1;
};

tweets.subscribe( (tweet) => {

    let tweets = store.getValue().tweets;
    tweets.push(tweet);

    tweets.filter(poorMansTweetReducer);
    tweets.filter(poorMansTweetOrdering);

    const nextState = {
        ...store.getValue(),
        tweets
    };

    store.next(nextState);

});


