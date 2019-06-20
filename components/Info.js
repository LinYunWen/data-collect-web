import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { constraints } from "../data";

export class Info extends React.Component {
    constructor(props) {
        super(props);
    }

    createInfoList(type) {
        let stream = constraints[type];
        let keys = Object.keys(stream);
        return keys.map((key, index) => {
            return (
                <Row key={index}>
                    <Col xs="8">{key}</Col>
                    <Col xs="4">{stream[key].exact}</Col>
                </Row>
            );
        });
    }

    render() {
        return (
            <Col xs="3">
                <Container>
                    <Row><Col>
                        <h5>Video</h5>
                    </Col></Row>
                    <Row><Col>{this.createInfoList("video")}</Col></Row>
                    {/* <Row><Col>Audio</Col></Row>
                    <Row><Col>{this.createInfoList("audio")}</Col></Row> */}
                </Container>
            </Col>
        );
    }
}
