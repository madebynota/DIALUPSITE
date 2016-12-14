import React from 'react';
import classNames from 'classnames/bind';
import Utils from '../../utils.js';
import Background from './Background';
import LogoSection from './LogoSection';
import LinksSection from './LinksSection';
import SiteMask from './SiteMask';
import styles from './styles/HomePage.css';

let cx = classNames.bind(styles);

class HomePage extends React.Component {
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

    transitionToNextVideo() {
			console.log("Switching Background to Static");
			$('.site-mask').style.visibility = "visible";
			$('.site-mask').src = 'img/staticGif/static.gif';

			setTimeout(function() {
				console.log("Removing mask")
				$('.site-mask').style.visibility = "hidden";
			}, 1500);

			switchBackground();

		}

    render() {
        return (
        	<div>
						<SiteMask />
        		<Background setLinkColor={this.setLinkColor.bind(this)} />
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

export default HomePage;
