export const tweetsOrdering = (tweetA, tweetB) => {

    if (tweetA.created_at > tweetB.created_at) {
        return -1;
    }
    if (tweetA.created_at < tweetB.created_at) {
        return 1;
    }

    return 0;
};