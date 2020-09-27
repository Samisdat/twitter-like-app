import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'

import {appStore, countTweets, resetStore, toggleDisplayedTweets} from './data/appStore';
import {htmlId} from './constants';
import {ClearTweets} from './components/ClearTweets';
import {ToggleLikedTweets} from './components/ToogleLikedTweets';
import {Tweet} from "./components/Tweet";

const TwitterLikeApp = () => {

    const [store, setStore] = useState(appStore.getValue());

    useEffect(()=> {
        // update state on every new emitted change from appstore
        appStore.subscribe(setStore);
    },[]);

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

    const tweets = getTweets();

    return (
        <Container className='mt-3'>
            <Row>
                <Col xs={4}><div  style={{position:'fixed'}}>

                    <h1 className='mb-3'>Twitter like app</h1>

                    <ToggleLikedTweets
                        active={store.toggle}
                        toggle={toggleDisplayedTweets}
                        numberOfAllTweets={countTweets().all}
                        numberOfLikedTweets={countTweets().liked}
                    />

                    <ClearTweets
                        numberOfTweets={countTweets().all + countTweets().liked}
                        resetStore={resetStore}
                    />

                </div></Col>

                <Col xs={8}>

                    {tweets.map((tweet) => {
                        return (
                            <Tweet
                                key={tweet.id_str}
                                {...tweet}
                            />
                            )
                    })}

                </Col>

            </Row>
        </Container>
    );
}

let appHtmlElement = document.getElementById(htmlId);

ReactDOM.render(<TwitterLikeApp />, appHtmlElement);