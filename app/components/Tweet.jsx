import React from "react";
import moment from "moment";

import {Row, Col, Card} from 'react-bootstrap'

import {LikeTweet} from "./LikeTweet";

export const Tweet = (props) => {

    const formatedDate = moment(props.created_at).format('HH:mm:ss');

    const bg = (false === props.liked) ? 'light': 'success';
    const text = (false === props.liked) ? 'dark': 'light';

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
                <Card.Footer>
                    <Row>
                        <Col>{formatedDate}</Col>
                        <Col className="text-right">
                            <LikeTweet id_str={props.id_str} liked={props.liked}></LikeTweet>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
    );
}
