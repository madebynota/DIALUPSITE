import React from 'react'

// Components
import StreamPlayer from './StreamPlayer'

import classNames from 'classnames/bind'
import styles from './styles/MobileRadio.css'

import ReactTwitchEmbedVideo from "react-twitch-embed-video"

let cx = classNames.bind(styles);

class MobileTwitch extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* <ReactTwitchEmbedVideo channel="talk2megooseman" layout="video" height="667" width="375" /> */}
                <ReactTwitchEmbedVideo channel="dialupstuff" layout="video" height="100%" width="100%" />
            </div>
        )
    }
}

export default MobileTwitch;
