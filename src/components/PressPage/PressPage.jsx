import React from 'react';
import classNames from 'classnames/bind';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './styles/PressPage.css';

let cx = classNames.bind(styles);

class PressPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      press: [
        {
          publication: "Ruby Hornet",
          link: "http://rubyhornet.com/jemal-four-take-picture/",
        },
        {
          publication: "NBN",
          link: "http://apps.northbynorthwestern.com/magazine/2016/winter/quad/dial-up/",
        },
      ]
    }
  }

  render() {
    return (
      <div className={cx("PressPage")}>
        <Grid fluid>
          <Row>
            <Col xsOffset={3} xs={6} smOffset={5} sm={2}>
              <img href="/home" className={cx("header")} src="img/logos/logo-2.png"/>
            </Col>
          </Row>
        </Grid>
        <h2 className={cx("pressTitle")}> PRESS </h2>

        {this.state.press.map((press, index) => (
          <a key={index} href={press.link} className={cx("publication")}> {press.publication} </a>
        ))}

      </div>

    )
  }

}

export default PressPage;
