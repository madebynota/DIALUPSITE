import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import VideoBackground from './VideoBackground';
import LogoSection from './LogoSection';
import LinksSection from './LinksSection';
import styles from './styles/NonSafari.css';

let cx = classNames.bind(styles);

class NonSafariHomePage extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            linkColor: "#000000",
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
    	console.log(this.state);
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