import React from "react";
import moment from "moment";

import {Row, Col, Card} from 'react-bootstrap'

import {toogleLikeTweet} from "../data/appStore";

export const Tweet = (props) => {

    const formatedDate = moment(props.created_at).format('HH:mm:ss');

    const bg = (false === props.liked) ? 'light': 'success';
    const text = (false === props.liked) ? 'dark': 'light';

    const heart = (true === props.liked) ? '♥': '♡';

    const toggleLiked = () => {

        toogleLikeTweet(props.id_str);

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
                        <Col>{formatedDate}</Col>
                        <Col className="text-right">
                            {heart}
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
    );
}
