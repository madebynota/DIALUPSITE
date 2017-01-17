import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles/Message.css';

let cx = classNames.bind(styles);

class Message extends React.Component {
    render() {
        return (
            <div>
            	<div className={cx('messageBubble')}>
            		<div className={cx('username')}>
            			<strong>{this.props.user}</strong>
            		</div>
            		<br/>
            		<div className={cx('message')}>
            			{this.props.text}
            		</div>
            	</div>
            </div>
        )
    }
}

export default Message;
