import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles/SiteMask.css';

let cx = classNames.bind(styles);

class SiteMask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayStyle: {
                display: 'none',
                zIndex: -1000
            },
            playing: false
        };
        window.transitionToNextVideo = this.transitionToNextVideo.bind(this);
    }

    turnStaticOn() {
        this.setState({
            displayStyle: {
                display: 'inline',
                zIndex: -90
            }, 
            playing: true
        });
    }

    turnStaticOff() {
        this.setState({
            displayStyle: {
                display: 'none',
                zIndex: -1000
            }, 
            playing: true
        });
    }

    transitionToNextVideo() {
        this.turnStaticOn();
        // Arrow function binds context of "this" to SiteMask and not window
        setTimeout(() => {
            this.turnStaticOff()
            },
            650
        )
        switchBackground();
    }

    componentDidUpdate(prevProps, prevState) {
        let siteMask = document.getElementById("siteMask");
        
        if (siteMask != null) {
            if (this.state.playing) {
                siteMask.currentTime = 0;
                siteMask.play();
            }
            else {
                siteMask.pause();
            }
        }
    }

    render() {
        return window.innerWidth >= 767
            ?(
                <video className={cx("siteMask")} id={"siteMask"} style={this.state.displayStyle} src={'img/static/static.mp4'} muted loop></video>
            )
            :(
                <div></div>
            );
    }
}
export default SiteMask;
