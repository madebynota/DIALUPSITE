import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles/SiteMask.css';

let cx = classNames.bind(styles);

class SiteMask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayStyle: {
                display: 'none'
            }
        };
        window.transitionToNextVideo = this.transitionToNextVideo.bind(this);
    }

    turnStaticOn() {
        this.setState({
            displayStyle: {
                display: 'inline'
            }
        });
    }

    turnStaticOff() {
        this.setState({
            displayStyle: {
                display: 'none'
            }
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

    render() {
        return (
            <video className={cx("siteMask")} style={this.state.displayStyle} src={'img/static/static.mp4'} muted autoPlay loop></video>
        );
    }
}
export default SiteMask;
