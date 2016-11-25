import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import LogoSection from './LogoSection';
import styles from './styles/nonsafari.css';

let cx = classNames.bind(styles);

class NonSafariHomePage extends React.Component {
    render() {
        return (
            <div className={classNames('container-fluid', cx('verticalCenter'))}>
				<div className={'row'}>
					<div className={classNames('col-md-6', 'col-md-offset-3')}>
						<LogoSection styles={cx('logo')} />
					</div>
				</div>
            </div>
        );
    }
}

export default NonSafariHomePage;