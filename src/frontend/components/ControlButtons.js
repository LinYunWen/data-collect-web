import React from 'react';
import { Row, Col, Button } from "reactstrap";
import cx from "classnames";
import cls from "../style.scss";

export class ControlButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      recordMode: "default",
      playMode: "default",
      upload: false
    };
    this.changeMode = this.changeMode.bind(this);
  }

  changeMode(type, mode) {
    this.setState({
      [type]: mode
    });
  }

  render() {
    let buttonClass = {
      record: cx({ [cls.displayNone]: this.state.recordMode === "record" }),
      stop: cx({ [cls.displayNone]: this.state.recordMode !== "record" }),
      playRecord: cx({ [cls.displayNone]: this.state.playMode !== "stop" }),
      stopPlaying: cx({ [cls.displayNone]: this.state.playMode !== "play" }),
      upload: cx({ [cls.displayNone]: !this.state.upload }),
    }
    return (
        <Row style={{ padding: "10px 0"}}>
            <Col className={cls.textAlignCenter}>
                <span className={cls.marginRight10}>
                    <Button id="record" color="info" className={buttonClass.record}
                        onClick={() => {
                            this.changeMode("recordMode", "record");
                            this.changeMode("playMode", "default");
                            this.changeMode("upload", false);
                        }}
                    >Record</Button>
                    <Button id="stop" color="danger" className={buttonClass.stop}
                        onClick={() => {
                            this.changeMode("recordMode", "stop");
                            this.changeMode("playMode", "stop");
                            this.changeMode("upload", true);
                        }}
                    >Stop</Button>
                </span>
                <span>
                    <Button id="play-record" color="success" className={buttonClass.playRecord}
                        onClick={() => { this.changeMode("playMode", "play"); }}
                    >Play your record</Button>
                    <Button id="stop-playing" color="danger" className={buttonClass.stopPlaying}
                        onClick={() => { this.changeMode("playMode", "stop"); }}
                    >Stop playing</Button>
                </span>
                <span className={cls.floatRight}>
                    <Button id="play-record" color="success" className={buttonClass.upload}
                        onClick={() => { }}
                    >Upload</Button>
                </span>
            </Col>
        </Row>
    )
  }
}