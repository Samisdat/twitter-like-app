
import {appStore, countTweets} from "./data/appStore";

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {htmlId} from "./constants";
import {ClearTweets} from "./components/ClearTweets";
import {ToogleLikedTweets} from "./components/ToogleLikedTweets";
import {Tweets} from "./components/Tweets";

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

    // @todo move to appStore
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
        <React.Fragment>
            <Navbar fixed='top' bg="primary" variant="dark">
                <Navbar.Brand>Twitter like</Navbar.Brand>
                <Container>
                    <Row>
                        <Col>
                            <ToogleLikedTweets
                                active={store.toggle}
                                toggle={toggleDisplayedTweets}
                                numberOfAllTweets={countTweets().all}
                                numberOfLikedTweets={countTweets().liked}
                            />
                        </Col>
                        <Col>
                            <ClearTweets
                                numberOfTweets={store.tweets.length}
                                clearTweetsInStore={clearTweetsInStore}
                            />
                        </Col>
                    </Row>
                </Container>
            </Navbar>
            <Container style={{
                paddingTop: '70px'
            }}>
                <Row>
                    <Col sm={8} className='pt-10'>
                        <Tweets tweets={getTweets()}/>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

let appHtmlElement = document.getElementById(htmlId);

ReactDOM.render(<TwitterLikeApp />, appHtmlElement);