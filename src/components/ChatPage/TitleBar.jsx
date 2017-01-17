import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles/TitleBar.css';

let cx = classNames.bind(styles);

class TitleBar extends React.Component {
    render() {
        return (
            <div className={cx('titleBar')}>
                <div className={cx('title')}>
                    DIAL UP INSTANT MESSENGER
                </div>
            </div>
        );
    }
}

export default TitleBar;
