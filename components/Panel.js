import React from 'react';
import { Col } from "reactstrap";
import { VideoPane } from "./VideoPane";
import { TextPane } from "./TextPane";

export class Panel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col>
                <VideoPane />
                {/* <TextPane /> */}
            </Col>
        );
    }
}
