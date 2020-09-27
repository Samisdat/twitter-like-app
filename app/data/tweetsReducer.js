import {tweetMaxAgeSeconds} from '../constants';

export const tweetsReducer = (tweet) => {

    const msSinceTweet = Date.now() - tweet.created_at;

    const isOutDated = (msSinceTweet < tweetMaxAgeSeconds * 1000) ? true : false;

    return isOutDated;

};