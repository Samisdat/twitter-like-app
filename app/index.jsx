
import {appStore} from "./data/appStore";

import React, { useState, useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import {htmlId} from "./constants";
import {ClearTweets} from "./components/ClearTweets";
import {ToogleLikedTweets} from "./components/ToogleLikedTweets";
import {LikedTweetsCounter} from "./components/LikedTweetsCounter";
import {Tweets} from "./components/Tweets";

import 'bootstrap/dist/css/bootstrap.min.css';

import {Form, Navbar, Container, Row, Col} from 'react-bootstrap'

const TwitterLikeApp = (props) => {

    const [store, setStore] = useState(appStore.getValue());

    useLayoutEffect(()=> {
        appStore.subscribe(setStore);
    },[]);

    const clearTweetsInStore = () => {

        const nextState = {
            ...appStore.getValue(),
            tweets: []
        };

        appStore.next(nextState);

    };

    return (
        <React.Fragment>
            <Navbar fixed='top' bg="primary" variant="dark">
                <Navbar.Brand>Twitter like</Navbar.Brand>
                <Container>
                    <Row>
                        <Col sm={8}>
                            <LikedTweetsCounter></LikedTweetsCounter>
                        </Col>
                        <Col>
                            <ToogleLikedTweets></ToogleLikedTweets>
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
                        <Tweets tweets={store.tweets}></Tweets>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

let appHtmlElement = document.getElementById(htmlId);

ReactDOM.render(<TwitterLikeApp />, appHtmlElement);