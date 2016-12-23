import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles/mag.css'

let cx = classNames.bind(styles);


class MagPreviews extends React.Component {


    render() {
        return (
              <div className={classNames(cx('panel'), 'container-fluid')}>
                  <div className={classNames(cx('row'), 'row')}>
                      <div className = {classNames(cx('firstSec'), 'col-md-6')}>
                        <img className={classNames(cx('magazineCovers'))} src= 'img/magIcons/winter16.png' />

                        <img className={classNames(cx('magazineCovers'))}  src= "img/magIcons/summer16.png"/>
                      </div>

                      <div className = {classNames(cx('secSec'), 'col-md-6')}>
                        <img className={classNames(cx('magazineCovers'))} src= "/img/magIcons/summer15.png"/>

                        <img className={classNames(cx('magazineCovers'))} src= "/img/magIcons/fall15.png" />
                      </div>
                      <span className = 'stretch'> </span>
                </div>
            </div>
        );
    }
}

export default MagPreviews;
