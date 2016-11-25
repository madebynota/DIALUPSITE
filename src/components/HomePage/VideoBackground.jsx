import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import Utils from '../../utils.js';
import styles from './styles/VideoBackground.css';

let cx = classNames.bind(styles);

const bgVideos = [
    {
        "vidPath": "img/vids/aj-eggo.mp4",
        "color": "#FFFFFF"
    },
    {
        "vidPath": "img/vids/jeff-eggo.mp4",
        "color": "#FFFFFF"
    },
    {
        "vidPath": "img/vids/party.mp4",
        "color": "#44BBEC"
    },
    {
        "vidPath": "img/vids/slim-dillo.mp4",
        "color": "#ff2847"
    },
    {
        "vidPath": "img/vids/party-hypeness.mp4",
        "color": "#fe944f"
    },
    {
        "vidPath": "img/vids/luchador.mp4",
        "color": "#44BBEC"
    },
    {
        "vidPath": "img/vids/party-2.mp4",
        "color": "#18faee"
    },
    {
        "vidPath": "img/vids/dave-wasabi.mp4",
        "color": "#FFB9A3"
    },
    {
        "vidPath": "img/vids/feed-streets.mp4",
        "color": "#fdd848"
    },
    {
        "vidPath": "img/vids/jeff-yam.mp4",
        "color": "#44BBEC"
    },
    {
        "vidPath": "img/vids/archie-turnt.mp4",
        "color": "#FFB9A3"
    },
    {
        "vidPath": "img/vids/magic-go-crazy.mp4",
        "color": "#18faee"
    },
    {
        "vidPath": "img/vids/aj-dap.mp4",
        "color": "#FFB9A3"
    },
    {
        "vidPath": "img/vids/nbn2.mp4",
        "color": "#44BBEC"
    },
    {
        "vidPath": "img/vids/jeff-only-up.mp4",
        "color": "#FFB9A3"
    },
    {
        "vidPath": "img/vids/jack-dap.mp4",
        "color": "#18faee"
    },
    {
        "vidPath": "img/vids/archie-jerk.mp4",
        "color": "#18faee"
    }
];
let bgIndex = 0;
let shuffledVideos = Utils.arrayShuffle(bgVideos);

class VideoBackground extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            video: "",
            displayStyle: {}
        };
    }
    switchBackground(width) {
        let chosenVid = shuffledVideos[bgIndex % bgVideos.length].vidPath;
        let chosenColor = shuffledVideos[bgIndex % bgVideos.length].color; 

        this.setState({
            video: chosenVid,
            displayStyle: {
                display: "inline",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                zIndex: -100
            }
        });

        bgIndex++;
    }
    render() {
        return (
			<video className={cx("bgvideo")} style={this.state.displayStyle} src={this.state.video} muted autoPlay loop></video>
        );
    }
    componentDidMount() {
        window.switchBackground = this.switchBackground.bind(this);
    }
}

export default VideoBackground;