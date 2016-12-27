import React from 'react'; // gimme React
import classNames from 'classnames/bind'; // gotta name more than one class youngblood
import MagIcons from './MagIcons'; // Imports the Mag Previews component
import styles from './styles/MagPage.css'; // show me my stylesheets

let cx = classNames.bind(styles);

class MagPage extends React.Component {
    render() {
        return (

        	<div>
            	<img className = {cx("bkgImage")} src = "/img/misc/bedroom.png" />
            	<div className = {cx("headerText")}>
	            	<h1> MAGAZINES </h1>
	            	<h4> READ THE NEWEST SUMMER 16 MAG!</h4>
	            </div>
            	<div className = {"container-fluid"}>

            			<div className = {classNames("col-md-6", cx("magPanel"))}>
		            		<MagIcons picPath = "/img/magIcons/summer16.png"/>
		            	</div>

            			<div className = {classNames("col-md-6", cx("magPanel"))}>
		            		<MagIcons picPath = "/img/magIcons/fall15.png"/>
		            	</div>
                    </div>

                    <div className = "row">
                        <div className = {classNames("col-md-6", cx("magPanel"))}>		            		
		            		<MagIcons picPath = "/img/magIcons/winter16.png"/>
		            	</div>

		            	<div className = {classNames("col-md-6", cx("magPanel"))}>
		            		<MagIcons picPath = "/img/magIcons/summer15.png"/>
		            	</div>
            		</div>
            </div>
        );
    }
}

export default MagPage;
