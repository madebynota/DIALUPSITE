import React from 'react'; // gimme React
import classNames from 'classnames/bind'; // gotta name more than one class youngblood
import MagIcon from './MagIcon'; // Imports the Mag Previews component
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
		            		<MagIcon picPath = "/img/magIcons/summer16.png" href = '/magazines/summer2016'/>
		            	</div>

            			<div className = {classNames("col-md-6", cx("magPanel"))}>
		            		<MagIcon picPath = "/img/magIcons/fall15.png" href = '/magazines/fall2015'/>
		            	</div>
                    </div>

                    <div className = "row">
                        <div className = {classNames("col-md-6", cx("magPanel"))}>		            		
		            		<MagIcon picPath = "/img/magIcons/winter16.png" href = '/magazines/winter2016'/>
		            	</div>

		            	<div className = {classNames("col-md-6", cx("magPanel"))}>
		            		<MagIcon picPath = "/img/magIcons/summer15.png" href = '/magazines/summer2015'/>
		            	</div>
            		</div>
            </div>
        );
    }
}

export default MagPage;
