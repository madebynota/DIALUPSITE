import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles/StreamPlayer.css';
import ReactPlayer from 'react-player';

let cx = classNames.bind(styles);

class StreamPlayer extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            playing: false
        };
    }
	playPauseStream() {
		this.setState({
			playing: !this.state.playing
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
					url='http://198.143.144.226:8023/stream'
					playing={this.state.playing ? 1 : 0}
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
