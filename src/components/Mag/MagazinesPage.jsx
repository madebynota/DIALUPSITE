import React from 'react'; // gimme React
import classNames from 'classnames/bind'; // gotta name more than one class youngblood
import MagPreviews from './MagPreviews'; // Imports the Mag Previews component
import styles from './styles/mag.css'; // show me my stylesheets

let cx = classNames.bind(styles);

class MagazinesPage extends React.Component {
    render() {
        return (  
            <div>
            <img src="/img/misc/desk.jpg" className={cx("bkgImage")}/>
            <MagPreviews/>
            </div>
        );
    }
}

export default MagazinesPage;
