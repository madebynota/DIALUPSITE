import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles/StreamPlayer.css';
import ReactPlayer from 'react-player';

let cx = classNames.bind(styles);

class StreamPlayer extends React.Component {
	render () {
		return <ReactPlayer url='http://sc1.spacialnet.com:32660/;wnur.mp3' playing />
	}
}

export default StreamPlayer;