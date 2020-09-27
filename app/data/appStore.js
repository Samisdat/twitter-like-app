import {BehaviorSubject} from 'rxjs';
import {tweets} from '../../api/tweetSource';
import {adaptTweet} from './adaptTweet';
import {tweetsOrdering} from './tweetsOrdering';
import {tweetsReducer} from './tweetsReducer';

/**
 * my components should not know about the 'api' at all
 * So let's subscribe to the api
 * every tweet is added to datastore
 * then I reduce this to tweets newer then tweetMaxAgeSeconds
 * then I order date descending
 */

export const appStore = new BehaviorSubject({});

export const resetStore = () => {

    const nextState = {
        toggle: 'all',
        tweets: []
    };

    appStore.next(nextState);

};

resetStore();

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

export const toggleLikeTweet = (id_str) => {

    let tweets = appStore.getValue().tweets;

    for(const tweet of tweets){

        if(id_str === tweet.id_str){
            tweet.liked = (true === tweet.liked)? false: true;
        }

    }

    // if toggle is 'liked' and we unlike a tweet, we might end up with an empty screen
    // so if we unlike the very last tweet -> implicit switch to 'all'
    let toggle = appStore.getValue().toggle;

    if('liked' === toggle && 0 === countTweets().liked){
        toggle = 'all';
    }

    const nextState = {
        ...appStore.getValue(),
        toggle: toggle,
        tweets
    };

    appStore.next(nextState);

};

export const toggleDisplayedTweets = () => {

    const toggle = ('all' === appStore.getValue().toggle) ? 'liked' : 'all';

    const nextState = {
        ...appStore.getValue(),
        toggle: toggle
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


