
import {appStore, countTweets} from "./data/appStore";

import React, { useState, useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import {htmlId} from "./constants";
import {ClearTweets} from "./components/ClearTweets";
import {ToogleLikedTweets} from "./components/ToogleLikedTweets";
import {LikedTweetsCounter} from "./components/LikedTweetsCounter";
import {Tweets} from "./components/Tweets";

import 'bootstrap/dist/css/bootstrap.min.css';

import {Navbar, Container, Row, Col} from 'react-bootstrap'

const TwitterLikeApp = (props) => {

    const [store, setStore] = useState(appStore.getValue());

    useLayoutEffect(()=> {
        appStore.subscribe(setStore);
    },[]);

    const clearTweetsInStore = () => {

        const nextState = {
            toggle: 'all',
            tweets: []
        };

        appStore.next(nextState);

    };

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
        console.log('toogleDisplayedTweets');

        const toggle = ('all' === store.toggle) ? 'liked' : 'all';

        console.log(toggle)

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
                            <ToogleLikedTweets active={store.toggle} toggle={toggleDisplayedTweets} numberOfAllTweets={countTweets().all} numberOfLikedTweets={countTweets().liked}></ToogleLikedTweets>
                        </Col>
                        <Col>
                            <ClearTweets numberOfTweets={store.tweets.length} clearTweetsInStore={clearTweetsInStore}></ClearTweets>
                        </Col>
                    </Row>
                </Container>

            </Navbar>
            <Container style={{
                paddingTop: '70px'
            }}>
                <Row>
                    <Col sm={8} className='pt-10'>
                        <Tweets tweets={getTweets()}></Tweets>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

let appHtmlElement = document.getElementById(htmlId);

ReactDOM.render(<TwitterLikeApp />, appHtmlElement);