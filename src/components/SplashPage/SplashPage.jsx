import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classNames from 'classnames/bind';
import Utils from '../../utils.js';
import firebase from '../../firebase.js';
import styles from './styles/SplashPage.css';

let cx = classNames.bind(styles);

class SplashPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	enterSite(e) {
		e.preventDefault();
		window.location.href = '/home';
	}

	enterSite(e) {
		e.preventDefault();
		window.location.href = '/home';
	}

	render() {
		return (
			<div className={cx("RSVPPage")}>
				<div className={cx("body")}>
					<img src="/img/graphics/album_cover.jpg" alt="eyes closed." />
					<div className={cx('links')}>
						<a href='https://open.spotify.com/album/0KqQ7GrUvoWIJvNLA8NDQb'>
							<h4> SPOTIFY </h4>
						</a>
						<a href='https://music.apple.com/gb/album/eyes-closed/1487917622'>
							<h4> APPLE MUSIC </h4>
						</a>
					</div>
				</div>
				<div className={cx('enter')}>
					<button onClick={this.enterSite}> enter site </button>
				</div>
				<img src="/img/graphics/eyes-closed.gif" className={cx('bkg')} />
			</div>
		);
	}
}

export default SplashPage;
