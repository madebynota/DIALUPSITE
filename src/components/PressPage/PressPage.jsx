import React from 'react';
import classNames from 'classnames/bind';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './styles/PressPage.css';
import PressLinks from './PressLinks/PressLinks';

let cx = classNames.bind(styles);


class PressPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      press: [
        {
          publication: "The Daily Northwestern",
          url: "https://dailynorthwestern.com/2016/05/22/top-stories/captured-dillo-day-evening-sets/"
        },
        {
          publication: "Ruby Hornet 2.0",
          url: "http://rubyhornet.com/jemal-four-take-picture/",
        },
        {
          publication: "NBN",
          url: "http://apps.northbynorthwestern.com/magazine/2016/winter/quad/dial-up/",
        },
      ]
    }
  }

  render() {
    return (
      <div className={cx("PressPage")}>
        <Grid fluid>
          <Row className={cx("header")}>
            <Col xs={12}>
              <h3 className={cx("headerTitle")}> PRESS </h3>
            </Col>
          </Row>
          <Row>
            <iframe src="https://player.vimeo.com/video/188082029?color=ffb9a3&portrait=0" width="640" height="469" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </Row>
        </Grid>
        <h2 className={cx("pressTitle")}> ARTICLES </h2>
          <Row className={cx("linkSection")}>
            <Col xs={4} xsOffset={2}>
              <PressLinks publisher={this.state.press[0].publication} url={this.state.press[0].url} />
              <PressLinks publisher={this.state.press[2].publication} url={this.state.press[2].url} />
            </Col>
            <Col xs={4}>
              <PressLinks publisher={this.state.press[1].publication} url={this.state.press[1].url} />
            </Col>
          </Row>
      </div>

    )
  }

}

export default PressPage;
