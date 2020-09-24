import {tweets} from "./mock-api";

/**
 * my components should not know about the "api" at all
 * So let's subscribe to the api
 * every tweet is added to datastore
 * then I reduce this to tweets newer then tweetMaxAgeSeconds
 * then I order date descending
 */
export const tweetsDataStore = [];

const poorMansReducer = () => {

};

const poorMansOrdering = () => {

};

tweets.subscribe( (tweet) => {

    tweetsDataStore.push(tweet);

    }
);

tweets.subscribe(()=>{
    console.log(tweetsDataStore);
});
