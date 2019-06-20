import React from 'react';
import { Container, Row, Col } from "reactstrap";
import cls from "../style.scss";

export class TextPane extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col>
                <Container>
                    <Row><Col>
                    </Col></Row>
                    <Row><Col>
                        
                    </Col></Row>
                    <Row><Col>
                        
                    </Col></Row>
                </Container>
            </Col>
        );
    }
}
