import React from 'react';
import moment from 'moment';

import {Row, Col, Card} from 'react-bootstrap'

// @TODO all other functions are "injected" by from. This one is imported. Use props instead
import {toggleLikeTweet} from '../data/appStore';

export const Tweet = (props) => {

    const formattedDate = moment(props.created_at).format('HH:mm:ss');
    const bg = (false === props.liked) ? 'light': 'success';
    const text = (false === props.liked) ? 'dark': 'light';
    const heart = (true === props.liked) ? '♥': '♡';

    const toggleLiked = () => {

        toggleLikeTweet(props.id_str);

    };

    return (
        <Card className='mb-3' bg={bg} text={text}>
            <Card.Body>
                <Card.Title>
                    @{props.user}
                </Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
            <Card.Footer onClick={toggleLiked} style={{cursor: 'pointer'}}>
                <Row>
                    <Col>{formattedDate}</Col>
                    <Col className='text-right'>
                        {heart}
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    );
}
