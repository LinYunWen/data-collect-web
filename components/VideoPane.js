import React from 'react';
import { Container, Row, Col } from "reactstrap";
import cls from "../style.scss";

export class VideoPane extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Row><Col>
                    <button id="record">Record</button>
                    <button id="stop">Stop</button>
                    <button id="capture">Capture</button>

                    <button id="start-media">Start Media</button>
                    <button id="stop-media">Stop Media</button>
                </Col></Row>
                <Row><Col>
                    <video id="player" controls autoPlay className={cls.video}></video>
                </Col></Row>
                <Row><Col>
                    <canvas id="snapshot"></canvas>
                </Col></Row>
            </Container>
        );
    }
}
