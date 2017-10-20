import React from 'react';
import classNames from 'classnames/bind';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './styles/PressLinks.css';

let cx = classNames.bind(styles);

class PressLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className={cx("linkContainer")}>
        <a className={cx("pressLink")} href={this.props.url}>{this.props.publisher}</a>
      </div>
    )
  }
}

export default PressLinks;
