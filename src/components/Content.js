import React from 'react';
import { Container, Row } from "reactstrap";
import { Info } from "./Info";
import { Panel } from "./Panel";

export class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Info />
                    <Panel />
                </Row>
            </Container>
        );
    }
}
