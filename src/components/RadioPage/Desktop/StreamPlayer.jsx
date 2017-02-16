import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles/StreamPlayer.css';
import ReactPlayer from 'react-player';

let cx = classNames.bind(styles);

class StreamPlayer extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            volumeOn: false
        };
    }
	playPauseStream() {
		this.setState({
			volumeOn: !this.state.volumeOn,
			streamUrl: 'http://198.143.144.226:8023/stream.mp3'
		});
	}
	render() {
		let buttonText = this.state.volumeOn
			? "PAUSE RADIO STREAM"
			: "PLAY RADIO STREAM";

		return (
			<div>
				<div className={cx('playPauseButton')} onClick={this.playPauseStream.bind(this)}>
					{buttonText}
				</div>
				<ReactPlayer
					url='http://198.143.144.226:8023/stream' 
 					playing={true}
 					volume={this.state.volumeOn ? 1 : 0}
					width={0}
					height={0}
					hidden={true}
				/>
			</div>
		);
	}
}

export default StreamPlayer;
