
import {appStore, countTweets} from './data/appStore';

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {htmlId} from './constants';
import {ClearTweets} from './components/ClearTweets';
import {ToogleLikedTweets} from './components/ToogleLikedTweets';
import {Tweets} from './components/Tweets';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Navbar, Container, Row, Col} from 'react-bootstrap'

const TwitterLikeApp = (props) => {

    const [store, setStore] = useState(appStore.getValue());

    useEffect(()=> {
        // update state on every new emitted change from appstore
        appStore.subscribe(setStore);
    },[]);

    // @todo move to appStore
    const clearTweetsInStore = () => {

        const nextState = {
            toggle: 'all',
            tweets: []
        };

        appStore.next(nextState);

    };

    // read from store based on toggle
    const getTweets = () => {

        const toggle = store.toggle;

        if('all' === toggle){
            return store.tweets;
        }
        else{
            return store.tweets.filter((tweet)=>{
                return (true === tweet.liked);
            });
        }

    };

    const toggleDisplayedTweets = () => {

        const toggle = ('all' === store.toggle) ? 'liked' : 'all';

        const nextState = {
            ...appStore.getValue(),
            toggle: toggle
        };

        appStore.next(nextState);

    };

    return (
        <Container className='mt-3'>
            <Row>
                <Col xs={4}><div  style={{position:'fixed'}}>

                    <h1 className='mb-3'>Twitter like app</h1>

                    <ToogleLikedTweets
                        active={store.toggle}
                        toggle={toggleDisplayedTweets}
                        numberOfAllTweets={countTweets().all}
                        numberOfLikedTweets={countTweets().liked}
                    />

                    <ClearTweets
                        numberOfTweets={store.tweets.length}
                        clearTweetsInStore={clearTweetsInStore}
                    />

                </div></Col>

                <Col xs={8}>
                    <Tweets tweets={getTweets()}/>
                </Col>
            </Row>
        </Container>
    );
}

let appHtmlElement = document.getElementById(htmlId);

ReactDOM.render(<TwitterLikeApp />, appHtmlElement);