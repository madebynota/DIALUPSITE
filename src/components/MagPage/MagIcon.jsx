import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles/MagIcon.css'

let cx = classNames.bind(styles);

class MagIcon extends React.Component {

    render() {
        return (
        	<a href = {this.props.href}>
            	<img className = {cx('magazineCovers')} src = {this.props.picPath}/>
            </a>
        );
    }
}

export default MagIcon;