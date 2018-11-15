import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles/BlogPage.css'; // show me my stylesheets

let cx = classNames.bind(styles);
class MagPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        window.location.href = "https://dialupstuff.tumblr.com/";
    }

    render() {
        return (
        	<div className={cx('redirect')}>
            	<div> 
                    <h1> Redirecting... </h1>
                    <p> Taking you to dialupstuff.tumblr.com </p>
                </div>
            </div>
        );
    }
}

export default MagPage;
