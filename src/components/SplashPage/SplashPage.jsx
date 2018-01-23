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
          <iframe className={cx("promoVideo")} align="middle" width="840" height="473" src="https://www.youtube.com/embed/lYbFoQdh_eg?rel=0" frameborder="0" allowfullscreen></iframe>
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
