import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles/TitleBar.css';

let cx = classNames.bind(styles);

class TitleBar extends React.Component {
    render() {
        return (
            <div className={cx('titleBar')}>
                <div className={cx('barContents')}>
                    <div className={classNames(cx('title'), cx('centerInBar'))}>
                        DIAL UP INSTANT MESSENGER
                    </div>
                    <div className={classNames(cx('online'), cx('centerInBar'))}>
                        <div className={cx('greenCircle')}></div>
                        {this.props.userCount} PEOPLE ON
                    </div>
                </div>
            </div>
        );
    }
}

export default TitleBar;
