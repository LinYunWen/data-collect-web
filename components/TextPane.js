import React from 'react';
import { Container, Row, Col, Button } from "reactstrap";
import cls from "../style.scss";
import { texts } from "../data";

export class TextPane extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col>
                <Container>
                    <Row><Col>
                        <Button id="record" color="info">Record</Button>
                        <Button id="stop" color="danger">Stop</Button>
                    </Col></Row>
                    <Row><Col>
                        <Container>
                            <Row><Col>
                                {texts[0].alphabet}
                            </Col></Row>
                            <Row><Col>
                                {texts[0].text}
                            </Col></Row>
                        </Container>
                    </Col></Row>
                    <Row><Col>
                        <Button id="previous">Previous</Button>
                        <Button id="next">Next</Button>
                    </Col></Row>
                </Container>
            </Col>
        );
    }
}
