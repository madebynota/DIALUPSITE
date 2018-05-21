import React from 'react';

import styles from './styles/SplashPage.css';
import classNames from 'classnames/bind';
import Utils from '../../utils.js';

let cx = classNames.bind(styles);

class SplashPage extends React.Component {
	constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={cx("container")}>
          <div className={cx("video-container")}>
            <video className={cx("classic")} preload="auto" autoPlay loop>
              <source type="video/mp4" src="/img/vids/cp.mp4"/>
            </video>
          </div>

        <div className={cx("extras")}>
          <a className={cx("link")} href="/home">
            <div className={cx("playPauseButton")}>
              ENTER THE SITE
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default SplashPage;
