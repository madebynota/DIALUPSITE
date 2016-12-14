import React from 'react';

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
        this.setState({displayStyle: {display: 'inline'}});
    }

    turnStaticOff() {
        this.setState({displayStyle: {display: 'none'}});
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
            <img style={this.state.displayStyle} src={'img/staticGif/static.gif'} />
        );
    }
}
export default SiteMask;
