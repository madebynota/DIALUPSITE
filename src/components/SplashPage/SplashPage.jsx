import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classNames from 'classnames/bind';
import Utils from '../../utils.js';
import styles from './styles/SplashPage.css';

let cx = classNames.bind(styles);

class SplashPage extends React.Component {
	constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid fluid className={cx('SplashPage')}>
				<Row>
					<Col xs={12} className={cx('video-container')}>
            <iframe
							className={cx("video")}
							width="840"
							height="472"
							src="https://www.youtube.com/embed/7phVCToiVdg"
							frameborder="0"
							allow="autoplay; encrypted-media"
							allowfullscreen>
							</iframe>
							<div>
			          <a className={cx("enter")} href="/home"> ENTER THE SITE </a>
							</div>
					</Col>
				</Row>
      </Grid>
    );
  }
}

export default SplashPage;
