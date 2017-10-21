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
          url: "http://rubyhornet.com/jemal-four-take-picture/"
        }
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
          <Row>
            <Col xs={12} smOffset={2} sm={8}>
              <h2 className={cx("pressTitle")}> ARTICLES </h2>
            </Col>
          </Row>

          <Row className={cx("linkSection")}>
            <Col xs={12} sm={4} smOffset={2}>
              <PressLinks publisher={this.state.press[0].publication} url={this.state.press[0].url} />
            </Col>
            <Col xs={12} sm={4}>
              <PressLinks publisher={this.state.press[1].publication} url={this.state.press[1].url} />
            </Col>
          </Row>
        </Grid>
      </div>

    )
  }

}

export default PressPage;
