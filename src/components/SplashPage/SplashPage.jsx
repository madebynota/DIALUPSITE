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
			nameError: false,
			emailError: false,
			name: '',
			email: '',
			referral: '',
			submitted: false,
		}
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleReferralChange = this.handleReferralChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleNameChange(e) {
		this.setState({
			name: e.target.value
		})
	}

	handleEmailChange(e) {
		this.setState({
			email: e.target.value
		})
	}

	handleReferralChange(e) {
		this.setState({
			referral: e.target.value
		})
	}

	enterSite(e) {
		e.preventDefault();
		window.location.href = '/home';
	}

	handleSubmit(e) {
		e.preventDefault();
		const {name, email, referral} = this.state;
		if (name.length <= 1) {
			this.setState({
				nameError: true
			});
		} else if (email.length < 4) {
			this.setState({
				emailError: true,
			});
		} else {
			const guestsRef = firebase.database().ref('guests');
			const guestInfo = {
				name: this.state.name,
				email: this.state.email,
				referral: this.state.referral,
			}
			guestsRef.push(guestInfo);
			this.setState({
				emailError: false,
				nameError: false,
				submitted: true,
				name: '',
				email: '',
				referral: ''
			});
		}
	}

	render() {
		const { nameError, emailError, submitted } = this.state;
		const errorStyles = {
			display: !nameError && !emailError ? 'none' : 'flex',
			color: 'red',
			marginTop: '10px'
		}

		const textareaStyles = submitted ? {
			marginBottom: '40px',
		} : null;

		const submittedStyles = {
			display: submitted ? 'flex' : 'none',
			marginBottom: '30px'
		};

		return (
			<div className={cx('RSVPPage')}>
				<img src='/img/graphics/title.svg' className={cx('title')}/>
				<div className={cx('subtitles')}>
					<h2 className={cx('subtitle')}> release party & live performance </h2>
					<h2 className={cx('subtitle', 'bottom')}> release party & live performance </h2>
				</div>
				<div className={cx('third-row')}>
					<h3 className={cx('left')}> november 15th, 2019 <br /> 8 P.M. - 11 P.M. </h3>
					<h3 className={cx('middle')}> all ages <br/> free entry <br/> full service bar </h3> 
					<h3 className={cx('right')}> 1259 n. milwaukee st. <br /> chicago, il 60622 </h3>
				</div>
				<div className={cx('form')}>
					<form>
						<div className={cx('first-row-inputs')}>
							<input onChange={this.handleNameChange} className={cx('first')} type='text' placeholder='your name' value={this.state.name} />
							<input onChange={this.handleEmailChange} type='text' placeholder='your email' value={this.state.email} />
						</div>
						<h6 style={errorStyles} className={cx('error')}> please enter a valid email / name </h6>
						<input style={textareaStyles} onChange={this.handleReferralChange} type='textarea' placeholder="how'd you hear about this event? (optional)" value={this.state.referral} />
						{submitted && (
							<h6 style={submittedStyles} className={cx('error')}> response submitted. see you next week! </h6>
						)}
						<div className={cx('btns')}>
							{!submitted && (
								<div className={cx('submit')}>
									<button onClick={this.handleSubmit}> SUBMIT </button>
								</div>
							)}
							<div className={cx('submit')}>
								<button onClick={this.enterSite}> ENTER SITE </button>
							</div>
						</div>
					</form>
				</div>
				<img src="/img/graphics/eyes-closed.gif" className={cx('bkg')} />
			</div>
		);
	}
}

export default SplashPage;
