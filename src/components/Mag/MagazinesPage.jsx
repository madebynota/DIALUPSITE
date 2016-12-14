import React from 'react'; // gimme React
import classNames from 'classnames/bind'; // gotta name more than one class youngblood
import bkg from './bkg';
import MagPreviews from './MagPreviews'; // Imports the Mag Previews component
import styles from './styles/mag.css'; // show me my stylesheets

let magStyles = classNames.bind(styles);

class MagazinesPage extends React.Component {
    render() {
        return (
            <div className={magStyles("mag")}>
            <MagPreviews/>
            </div>
        );
    }
}

export default MagazinesPage;
