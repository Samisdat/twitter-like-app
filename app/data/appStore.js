import {BehaviorSubject} from 'rxjs';
import {tweets} from "./mock-api";
import {adaptTweet} from "./adaptTweet";
import {tweetsOrdering} from "./tweetsOrdering";
import {tweetsReducer} from "./tweetsReducer";

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

tweets.subscribe( (tweet) => {

    let tweets = appStore.getValue().tweets;
    tweets.push(
        adaptTweet(tweet)
    );

    tweets = tweets.filter(tweetsReducer);
    tweets = tweets.sort(tweetsOrdering);

    const nextState = {
        ...appStore.getValue(),
        tweets
    };

    appStore.next(nextState);

});


