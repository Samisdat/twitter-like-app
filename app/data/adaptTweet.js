/**
 * i decided to thread the createTweetSource as external dependency.
 *
 * so i want to use data from this dependency as input to feed my own app specify data 'model'
 *
 * benefits:
 * 1) if external dep changes e.g. renaming account to account_name
 * it might be enough to change this adaption layer and no other change in app is needed at all
 *
 * 2) developers who develop 'only' within the app can relay an app specific data models and don't need to even now about external api
 *
 * with more time i would loved to to this in typescript, interface and as unit tested value object
 *
 * naming borrowed from https://developer.twitter.com/en/docs/twitter-api/v1/data-dictionary/overview/intro-to-tweet-json
 */

import {getId} from './id';

export const adaptTweet = (dataFromApi) => {

    const normalizedTweet = {
        created_at: undefined,
        id_str: getId(),
        text: undefined,
        user: undefined,
        liked: false
    };

    if (undefined !== dataFromApi.timestamp) {
        normalizedTweet.created_at = dataFromApi.timestamp;
    }

    if (undefined !== dataFromApi.content) {
        normalizedTweet.text = dataFromApi.content;
    }

    if (undefined !== dataFromApi.account) {
        normalizedTweet.user = dataFromApi.account;
    }

    return normalizedTweet;

};