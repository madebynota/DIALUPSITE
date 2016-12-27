import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles/MagIcons.css'

let cx = classNames.bind(styles);

class MagIcons extends React.Component {

    render() {
        return (
             <img className = {cx('magazineCovers')} src = {this.props.picPath} />
        );
    }
}

export default MagIcons;
