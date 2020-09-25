/**
 * assume that as an external dependency
 * AwardsDarwin and CommitStrip tweet every 5000ms
 * and iamdevloper has no life: he tweets every 3000ms
 *
 * All tweets are merged into a single stream
 * I can subscript to the stream and get single every tweet in realtime
 */

import { interval, merge } from 'rxjs';
import { map } from 'rxjs/operators';

const createTweetSource = (frequency, account, attribute) => {
    return interval(frequency).pipe(
        map(i => ({
            account,
            timestamp: Date.now(),
            content: `${attribute} Tweet number ${i + 1}` })
        )
    );
}

export const tweets = merge(
    createTweetSource(
        5000,
        'AwardsDarwin',
        'Facepalm'
    ),
    createTweetSource(
        3000,
        'iamdevloper',
        'Expert'
    ),
    createTweetSource(
        5000,
        'CommitStrip',
        'Funny'
    )
);