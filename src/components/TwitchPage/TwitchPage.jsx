import React from 'react'
import MobileTwitch from './Mobile/MobileTwitch'
import DesktopTwitch from './Desktop/DesktopTwitch'

class TwitchPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // Set background to Blue
        document.body.style.backgroundColor = "#10C0FF";

        if(window.windowWidth < 600) {
            return <MobileTwitch />
        } else {
            return <DesktopTwitch />
        }
    }
}

export default TwitchPage;
