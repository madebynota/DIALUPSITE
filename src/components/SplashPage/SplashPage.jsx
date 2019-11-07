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
      <div className={cx('RSVPPage')}>
        <img src='/img/graphics/title.svg' className={cx('title')}/>
				<div className={cx('subtitles')}>
					<h2 className={cx('subtitle')}> release party & live performance </h2>
					<h2 className={cx('subtitle', 'bottom')}> release party & live performance </h2>
				</div>
				<div className={cx('third-row')}>
					<h3 className={cx('left')} > november 15th, 2019 <br /> 8 P.M. - 11 P.M. </h3>
					<h3 className={cx('right')} > 1259 n. milwaukee st. <br /> chicago, il, 60626 </h3>
				</div>
				<div className={cx('form')}>
					<form>
						<div className={cx('first-row-inputs')}>
							<input className={cx('first')} type='text' placeholder='your name' />
							<input type='text' placeholder='your email' />
						</div>
						<input type='textarea' placeholder="how'd you hear about this event? (optional)" />
						<div className={cx('btns')}>
							<div className={cx('submit')}>
								<button> SUBMIT </button>
							</div>
							<div className={cx('submit')}>
								<button> ENTER SITE </button>
							</div>
						</div>
					</form>
				</div>
				<video autoPlay muted loop className={cx('bkg')}>
				  <source src="/video/eyes-closed.mp4" type="video/mp4" />
				</video>
      </div>
    );
  }
}

export default SplashPage;
