import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles/mag.css'

let cx = classNames.bind(styles);


class MagPreviews extends React.Component {
    render() {
        return (
              <div className={cx('panel')}>
                <div className={cx('icon-container')}>
                  <img className={classNames('img-fluid', cx('magazineCovers'))} src= "img/magIcons/summer15.png"/>
                </div>
                <div className={cx('icon-container')}>
                  <img className={classNames('img-fluid', cx('magazineCovers'))} src= "img/magIcons/winter16.png"/>
                </div>
                <div className={cx('icon-container')}>
                  <img className={classNames('img-fluid', cx('magazineCovers'))} src= "img/magIcons/summer16.png"/>
                </div>
            </div>

        );
    }
}

export default MagPreviews;
