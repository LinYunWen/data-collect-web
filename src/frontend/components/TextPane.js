import React from 'react';
import { Container, Row, Col, Button } from "reactstrap";
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import cx from "classnames";
import cls from "../style.scss";
import { texts } from "../data";

export class TextPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      recordMode: "default",
      playMode: "default"
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.createSlides = this.createSlides.bind(this);
    this.changeMode = this.changeMode.bind(this);
  }

  changeMode(type, mode) {
    this.setState({
      [type]: mode
    });
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    this.setState({
      activeIndex: (++this.state.activeIndex) % texts.length
    });
  }

  previous() {
    if (this.animating) return;
    this.setState({
      activeIndex: (this.state.activeIndex + texts.length - 1) % texts.length
    });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  createSlides() {
    return texts.map((item, index) => {
      return (
        <CarouselItem key={index} onExiting={this.onExiting} onExited={this.onExited}>
          <Container className={cls.height100pa}>
            <Row className={cls.height100pa}>
              <Col className={cls.marginAuto}>
                <Row><Col>
                  {item.text}
                </Col></Row>
                <Row><Col>
                  {item.alphabet}
                </Col></Row>
              </Col>
            </Row>
          </Container>
          {/* <CarouselCaption captionText={item.text} captionHeader={item.text} /> */}
        </CarouselItem>
      );
    });
  }

  render() {
    const { activeIndex } = this.state;
    let textCol = cx(cls.height100pa, cls.textAlignCenter);
    let buttonClass = {
      record: cx({ [cls.displayNone]: this.state.recordMode === "record" }),
      stop: cx({ [cls.displayNone]: this.state.recordMode !== "record" }),
      playRecord: cx({ [cls.displayNone]: this.state.playMode !== "stop" }),
      stopPlaying: cx({ [cls.displayNone]: this.state.playMode !== "play" }),
    }
    return (
      <Col>
        <Container>
          <Row className={cls.textRow}>
            <Col className={textCol}>
              <Carousel className={cls.height100pa} activeIndex={activeIndex} next={this.next} previous={this.previous}>
                {/* <CarouselIndicators items={texts} activeIndex={activeIndex} onClickHandler={this.goToIndex} /> */}
                {this.createSlides()}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
              </Carousel>
            </Col>
          </Row>
          <Row style={{ padding: "10px 0"}}>
            <Col className={cls.textAlignCenter}>
              <span className={cls.marginRight10}>
                <Button id="record" color="info" className={buttonClass.record}
                  onClick={() => {
                    this.changeMode("recordMode", "record");
                    this.changeMode("playMode", "default");
                  }}
                >Record</Button>
                <Button id="stop" color="danger" className={buttonClass.stop}
                  onClick={() => {
                    this.changeMode("recordMode", "stop");
                    this.changeMode("playMode", "stop");
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
            </Col>
          </Row>
        </Container>
      </Col>
    )
  }
}