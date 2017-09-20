import React from 'react'; // gimme React
import classNames from 'classnames/bind'; // gotta name more than one class youngblood
import styles from './styles/MagPage.css'; // show me my stylesheets

let cx = classNames.bind(styles);

class MagPage extends React.Component {
    render() {
        return (
        	<div>
            	<div className={cx("container-fluid")}>
                    <div className="row">
                        <div className = {classNames("col-md-12", cx("magList"))}>
                            <h3> Latest Mag: </h3>                         
                            <a className = {cx("current")} href = '/magazines/summer2016'> SUMMER 2016 </a>
                            <h3> And when you finish that, read these too: </h3>                         
                            <a href = '/magazines/winter2016'> WINTER 2016 </a>
                            <a href = '/magazines/fall2015'> FALL 2015 </a>
                            <a href = '/magazines/summer2015'> SUMMER 2015 </a>
		            	</div>
            		</div>
                </div>
            </div>
        );
    }
}

export default MagPage;
