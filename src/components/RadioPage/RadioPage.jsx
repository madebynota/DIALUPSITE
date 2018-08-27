import React from 'react';
import classNames from 'classnames/bind';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './styles/RadioPage.css';
import ReactTwitchEmbedVideo from "react-twitch-embed-video"

let cx = classNames.bind(styles);

class RadioPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={cx("RadioPage")}>
        <Grid fluid>
          <Row className={cx("header")}>
            <Col xs={12}>
              <h3 className={cx("headerTitle")}> RADIO </h3>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <ReactTwitchEmbedVideo channel="dialupstuff" />
            </Col>
          </Row>
        </Grid>
      </div>

    )
  }

}

export default RadioPage;
