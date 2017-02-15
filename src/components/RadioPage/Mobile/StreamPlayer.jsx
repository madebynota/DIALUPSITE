import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles/StreamPlayer.css';
import ReactPlayer from 'react-player';

let cx = classNames.bind(styles);

class StreamPlayer extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            playing: false,
			streamUrl: 'http://198.143.144.226:8023/stream.mp3'
        };
    }

	// Pausing and resuming the player leaves a users stream behind the live stream
	// Resetting the streamUrl on pause resets the stream to the most current blob
	playPauseStream() {
		this.setState({
			playing: !this.state.playing,
			streamUrl: 'http://198.143.144.226:8023/stream.mp3'
		});
	}

	render() {
		let buttonText = this.state.playing
			? "PAUSE RADIO STREAM"
			: "PLAY RADIO STREAM";

		return (
			<div>
				<div className={cx('playPauseButton', 'riseButton')} onClick={this.playPauseStream.bind(this)}>
					{buttonText}
				</div>
				<ReactPlayer
					url={this.state.streamUrl}
					playing={this.state.playing}
					volume={0.8}
					width={0}
					height={0}
					hidden={true}
				/>
			</div>
		);
	}
}

export default StreamPlayer;
