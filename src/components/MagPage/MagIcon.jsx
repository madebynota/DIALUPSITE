import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles/MagIcon.css'

let cx = classNames.bind(styles);

class MagIcon extends React.Component {

    render() {
        return (
             <img className = {cx('magazineCovers')} src = {this.props.picPath} />
        );
    }
}

export default MagIcon;