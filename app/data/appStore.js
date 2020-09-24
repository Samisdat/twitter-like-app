import {BehaviorSubject} from 'rxjs';
import {tweets} from "./mock-api";

/**
 * my components should not know about the "api" at all
 * So let's subscribe to the api
 * every tweet is added to datastore
 * then I reduce this to tweets newer then tweetMaxAgeSeconds
 * then I order date descending
 */

export const appStore = new BehaviorSubject();

// screams for an interface
const firstState = {
    tweets: [],
    toogle: 'all',
};

appStore.next(firstState);

const poorMansTweetReducer = (tweet) => {
    return true;
};

const poorMansTweetOrdering = (tweetA, tweetB) => {

    if(tweetA.timestamp > tweetB.timestamp){
        return -1;
    }
    if(tweetA.timestamp < tweetB.timestamp){
        return 1;
    }

    return 0;
};

tweets.subscribe( (tweet) => {

    let tweets = appStore.getValue().tweets;
    tweets.push(tweet);

    tweets.filter(poorMansTweetReducer);
    tweets = tweets.sort(poorMansTweetOrdering);

    const nextState = {
        ...appStore.getValue(),
        tweets
    };

    appStore.next(nextState);

});


