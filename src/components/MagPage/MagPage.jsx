import React from 'react'; // gimme React
import classNames from 'classnames/bind'; // gotta name more than one class youngblood
import PreviewRow from './PreviewRow'; // Imports the Mag Previews component
import styles from './styles/magazinePage.css'; // show me my stylesheets

let cx = classNames.bind(styles);

class MagPage extends React.Component {
    render() {
        return (
            <div>
            	<img src="/img/misc/bedroom.png" className={cx("bkgImage")}/>
            	<PreviewRow/>
            </div>
        );
    }
}

export default MagPage;
