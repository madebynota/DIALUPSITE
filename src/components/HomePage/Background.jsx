import React from 'react';
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
const bgColors = [
    '13, 192, 255',
    '255, 198, 173',
    '185, 215, 57',
    '0, 239, 171',
    '251, 210, 43',
    '255, 69, 69',
    '140, 47, 151',
    '233, 50, 97'
];

let bgIndex = 0;
let wrappedIndex = 0;
let shuffledVideos = Utils.arrayShuffle(bgVideos);

class Background extends React.Component {
    render() {
        return window.innerWidth >= 767
            ?(
                <VideoBackground setLinkColor={this.props.setLinkColor}/>
            )
            :(
                <StaticBackground setLinkColor={this.props.setLinkColor}/>
            );
    }
}

class VideoBackground extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            video: "",
            videoElements: [],
            displayStyle: {}
        };
    }
    switchBackground() {
        let chosenVid = shuffledVideos[wrappedIndex].vidPath;
        let chosenColor = shuffledVideos[wrappedIndex].color; 

        let displayStyle = {
            display: "inline",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            zIndex: -100
        };

        let updatedElements = this.state.videoElements;
        let displayedVideo = <video id={wrappedIndex} key={wrappedIndex} className={cx("bgvideo")} style={displayStyle} src={chosenVid} muted autoPlay loop></video>;
        updatedElements[wrappedIndex] = displayedVideo;

        if (wrappedIndex > 0) {
            let switchedIndex = -100 -10*wrappedIndex;
            let lastVideo = this.state.videoElements[wrappedIndex - 1];
            let newLastVideo = <video id={lastVideo.props.id} key={lastVideo.key} className={cx("bgvideo")} style={{zIndex: switchedIndex}} src={lastVideo.props.src} muted loop></video>;
            updatedElements[wrappedIndex - 1] = newLastVideo;
        }

        if (bgIndex % bgVideos.length === 0) {
            let switchedIndex = -100 -10*(bgVideos.length);
            let lastVideo = this.state.videoElements[bgVideos.length - 1];
            let newLastVideo = <video id={lastVideo.props.id} key={lastVideo.key} className={cx("bgvideo")} style={{zIndex: switchedIndex}} src={lastVideo.props.src} muted loop></video>;
            updatedElements[bgVideos.length - 1] = newLastVideo;
        }   

        this.setState({
            videoElements: updatedElements
        });

        this.props.setLinkColor(chosenColor);

        bgIndex++;
        wrappedIndex = bgIndex % bgVideos.length;
    }
    createVideoElements() {
        let baseStyle = {
            zIndex: -100
        };

        let videoElements = [];
        let incrementer = 0;
        for (let video of shuffledVideos) {
            let baseStyle = {
                zIndex: -100 - 10*incrementer
            };

            let element = <video id={incrementer} key={incrementer} className={cx("bgvideo")} style={baseStyle} src={video.vidPath} muted loop></video>;
            videoElements.push(element);
            incrementer++;
        }
        
        this.setState({
            videoElements: videoElements
        });
    }
    componentWillMount() {
        this.createVideoElements();
    }
    render() {
        window.switchBackground = this.switchBackground.bind(this);
        return (
            <div>
                {this.state.videoElements}
            </div>
        );
    }
    componentDidMount() {
        window.switchBackground = this.switchBackground.bind(this);
    }
    componentDidUpdate(prevProps, prevState) {
        let displayedVideo = document.getElementById(wrappedIndex);
        displayedVideo.currentTime = 0;
        displayedVideo.play();
    }
}

class StaticBackground extends React.Component {
    switchBackground() {
        let bgColor = 'rgba(' + bgColors[Math.floor(Math.random() * bgColors.length)] + ', 1)'
        document.body.style.background = bgColor;
        this.props.setLinkColor('#FFFFFF');
    }
    render() {
        window.switchBackground = this.switchBackground.bind(this);
        return (
            <div></div>
        );
    }
    componentDidMount() {
        window.switchBackground = this.switchBackground.bind(this);
    }
}

export default Background;