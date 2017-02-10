import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles/Message.css';

let cx = classNames.bind(styles);

class Message extends React.Component {
    formatAMPM(timestamp) {
        let date = new Date(this.props.timestamp);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        hours = this.pad(2, hours);
        minutes = minutes < 10 ? '0'+minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    pad(size, num) {
        let s = String(num);
        while (s.length < (size || 2)) {s = "0" + s;}
        return s;
    }
    getSmartTextColor(backgroundColor){
        if (!backgroundColor) {
            return 'white';
        }

        let hexColor = backgroundColor.slice(1);
        let r = parseInt(hexColor.substr(0,2),16);
        let g = parseInt(hexColor.substr(2,2),16);
        let b = parseInt(hexColor.substr(4,2),16);
        let yiq = ((r*299)+(g*587)+(b*114))/1000;

        return (yiq >= 230) ? 'black' : 'white';
    }
    render() {
        let style = {
            backgroundColor: this.props.color,
            color: this.getSmartTextColor(this.props.color)
        };

        return (
            <div>
                <div className={cx('time')}>
                    {this.formatAMPM(this.props.timestamp)}
                </div>
            	<div className={cx('messageBubble')} style={style}>
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
