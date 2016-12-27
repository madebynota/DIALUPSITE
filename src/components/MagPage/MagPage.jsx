import React from 'react'; // gimme React
import classNames from 'classnames/bind'; // gotta name more than one class youngblood
import PreviewRow from './PreviewRow'; // Imports the Mag Previews component
import styles from './styles/magazinePage.css'; // show me my stylesheets

let cx = classNames.bind(styles);

class MagPage extends React.Component {
    render() {
        return (

        	<div>
            	<img className={cx("bkgImage")} src="/img/misc/bedroom.png" />
            	<div className = {cx("headerText")}>
	            	<h1> MAGAZINES </h1>
	            	<h4> READ THE NEWEST SUMMER 16 MAG! <br/><br/><br/></h4>
	            </div>
            	<div className={classNames("container-fluid")}>
            		<div className = "row">

            			<div className = {classNames("col-md-3", cx("magPanel"), cx("firstjawn"))}>
		            		<PreviewRow picPath = "/img/magIcons/summer16.png"/>
		            	</div>

            			<div className = {classNames("col-md-3", cx("magPanel"))}>
		            		<PreviewRow picPath = "/img/magIcons/fall15.png"/>
		            	</div>

		            	<div className = {classNames("col-md-3", cx("magPanel"))}>		            		
		            		<PreviewRow picPath = "/img/magIcons/winter16.png"/>
		            	</div>

		            	<div className = {classNames("col-md-3", cx("magPanel"), cx("fourthjawn"))}>
		            		<PreviewRow picPath = "/img/magIcons/summer15.png"/>
		            	</div>
            		</div>
            	</div>
            </div>
        );
    }
}

export default MagPage;
