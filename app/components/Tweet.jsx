import React from "react";
import moment from "moment";

import {Row, Col, Card} from 'react-bootstrap'
export function Tweet(props) {

    const formatedDate = moment(props.created_at).format('HH:mm:ss');

    return (
            <Card className='mb-3'>
                <Card.Body>
                    <Card.Title>
                        @{props.user}
                    </Card.Title>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
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
