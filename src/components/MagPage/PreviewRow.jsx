import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles/magazinePage.css'

let cx = classNames.bind(styles);


class PreviewRow extends React.Component {


    render() {
        return (
              <div>
                <div className = {classNames(cx('panel'))}>
                  <img className={classNames(cx('magazineCovers'))} src= 'img/magIcons/winter16.png' />
                  <img className={classNames(cx('magazineCovers'))} src= "img/magIcons/summer16.png"/>
                  <img className={classNames(cx('magazineCovers'))} src= "/img/magIcons/summer15.png"/>
                  <img className={classNames(cx('magazineCovers'))} src= "/img/magIcons/fall15.png" />
                </div>
              </div>
        );
    }
}

export default PreviewRow;
