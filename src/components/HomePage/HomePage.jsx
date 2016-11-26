import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import Utils from '../../utils.js';
import VideoBackground from './VideoBackground';
import LogoSection from './LogoSection';
import LinksSection from './LinksSection';
import styles from './styles/HomePage.css';

let cx = classNames.bind(styles);

class NonSafariHomePage extends React.Component {
	constructor(props) {
        super(props);

        let linkColor = "#000000";

        if (Utils.getBrowser() == 'safari') {
            linkColor = "#FFFFFF";
            document.body.style.backgroundColor = "#FAD141";
        }

        this.state = {
            linkColor: linkColor,
        };
    }
    getLinkColor() {
    	return this.state.linkColor;
    }
    setLinkColor(color) {
    	this.setState({
    		linkColor: color
    	});
    }
    render() {
        return (
        	<div>
        		<VideoBackground setLinkColor={this.setLinkColor.bind(this)} />
	            <div className={classNames('container-fluid', cx('verticalCenter'))}>
					<div className={'row'}>
						<div className={classNames('col-md-6', 'col-md-offset-3')}>
							<LogoSection styles={cx('logo')} />
						</div>
					</div>
					<div className={'row'}>
						<div className={classNames('col-md-6', 'col-md-offset-3')}>
							<LinksSection color={this.state.linkColor} />
						</div>
					</div>
	            </div>
            </div>
        );
    }
}

export default NonSafariHomePage;