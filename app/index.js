import {tweets} from "./data/mock-tweets";

tweets.subscribe(
    console.log.bind(console)
);