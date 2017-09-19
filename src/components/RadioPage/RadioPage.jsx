import React from 'react'
import MobileRadio from './Mobile/MobileRadio'
import DesktopRadio from './Desktop/DesktopRadio'

class RadioPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // Set background to Blue
        document.body.style.backgroundColor = "#10C0FF";

        if(window.windowWidth < 600) {
            return <MobileRadio />
        } else {
            return <DesktopRadio />
        }
    }
}

export default RadioPage;
