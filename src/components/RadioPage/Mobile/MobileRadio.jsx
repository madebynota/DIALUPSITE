import React from 'react'

// Components
import StreamPlayer from './StreamPlayer'

import classNames from 'classnames/bind'
import styles from './styles/MobileRadio.css'

let cx = classNames.bind(styles);

class MobileRadio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img className={cx('andrewRadioFace')} src = "/img/andrewFace/andrew.png"/>
                <StreamPlayer className={cx('streamButton')}/>
                <h3 className={cx('footerText')}> DIAL UP </h3>
            </div> 
        )
    }
}

export default MobileRadio;
