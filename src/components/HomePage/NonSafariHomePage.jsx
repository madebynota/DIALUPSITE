import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import VideoBackground from './VideoBackground';
import LogoSection from './LogoSection';
import LinksSection from './LinksSection';
import styles from './styles/nonsafari.css';

let cx = classNames.bind(styles);

class NonSafariHomePage extends React.Component {
    render() {
        return (
        	<div>
        		<VideoBackground />
	            <div className={classNames('container-fluid', cx('verticalCenter'))}>
					<div className={'row'}>
						<div className={classNames('col-md-6', 'col-md-offset-3')}>
							<LogoSection styles={cx('logo')} />
						</div>
					</div>
					<div className={'row'}>
						<div className={classNames('col-md-6', 'col-md-offset-3')}>
							<LinksSection />
						</div>
					</div>
	            </div>
            </div>
        );
    }
}

export default NonSafariHomePage;