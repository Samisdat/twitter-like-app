// rxjs is expoxed by
// https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.4.0/rxjs.umd.min.js
const { interval, merge } = rxjs; const { map } = rxjs.operators;
const createTweetSource = (frequency, account, attribute) => { return interval(frequency).pipe(map(i => ({
    account,
    timestamp: Date.now(),
    content: `${attribute} Tweet number ${i + 1}` })));
}
const tweets = merge(
    createTweetSource(5000, 'AwardsDarwin', 'Facepalm'), createTweetSource(3000, 'iamdevloper', 'Expert'), createTweetSource(5000, 'CommitStrip', 'Funny')
); tweets.subscribe(console.log.bind(console));