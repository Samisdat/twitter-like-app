import React from "react";
import moment from "moment";

import {Row, Col, Card} from 'react-bootstrap'
export function Tweet(props) {

    const formatedDate = moment(props.timestamp).format('HH:mm:ss');

    return (
            <Card className='mb-3'>
                <Card.Body>
                    <Card.Title>
                        @{props.account}
                    </Card.Title>
                    <Card.Text>
                        {props.content}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <Row>
                        <Col>{formatedDate}</Col>
                        <Col className="text-right">♡♥</Col>
                    </Row>
                </Card.Footer>
            </Card>
    );
}
