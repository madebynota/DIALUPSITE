import React from 'react'
import MobileRadio from './Mobile/MobileRadio'
import DesktopRadio from './Desktop/DesktopRadio'

class RadioPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth
        };
    }

    render() {
        // Set background to Blue
        document.body.style.backgroundColor = "#10C0FF";

        if(this.state.windowWidth < 760) {
            return <MobileRadio />
        } else {
            return <DesktopRadio />
        }
    }
}

export default RadioPage;
