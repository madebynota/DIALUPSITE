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
	play() {
		this.setState({playing: true});
	}
	pause() {
		this.setState({playing: false});
	}
	render() {
		return (
			<div>
				<div>
					<button onClick={this.play.bind(this)}>Play</button>
					<button onClick={this.pause.bind(this)}>Pause</button>
				</div>
				<ReactPlayer 
					url='http://sc1.spacialnet.com:32660/;wnur.mp3' 
					playing={this.state.playing}
					hidden={true} />
			</div>
		);
	}
}

export default StreamPlayer;