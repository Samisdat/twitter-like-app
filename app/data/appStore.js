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

// screams for an ts interface
const firstState = {
    tweets: [],
    toggle: 'all',
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

export const toogleLikeTweet = (id_str) => {
    console.log('toogleLikeTweet', id_str);

    let tweets = appStore.getValue().tweets;

    for(const tweet of tweets){

        if(id_str === tweet.id_str){
            tweet.liked = (true === tweet.liked)? false: true;
        }

    }

    const nextState = {
        ...appStore.getValue(),
        tweets
    };

    appStore.next(nextState);

};

export const countTweets = () => {

    const countLiked = (sum, current) => {

        if(undefined !== current && true === current.liked){
            sum += 1;
        }

        return sum;
    };

    const liked = appStore.getValue().tweets.reduce(countLiked, 0);

    const all = appStore.getValue().tweets.length - liked;

    return{
        all: all,
        liked: liked
    };

}


