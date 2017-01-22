import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';
import classNames from 'classnames/bind';
import styles from './styles/MessageList.css';

let cx = classNames.bind(styles);

class MessageList extends React.Component {
    constructor(props){
        super(props);
        this.shouldScrollToBottom = false;

    }

    render() {
        return (
            <div className={cx('messageList')} ref={node => this.node = node}>
                {this.props.messages.map((message, i) => {
                    return (
                        <Message user={message.user} text={message.text} timestamp={message.timestamp}/>
                    );
                })
            }
            </div>
        );
    }

    componentWillUpdate() {
        this.shouldScrollBottom = this.node.scrollTop + this.node.offsetHeight === this.node.scrollHeight;
    }

    componentDidUpdate() {
        if(this.shouldScrollBottom) {
            this.node.scrollTop = this.node.scrollHeight;
        }
    }
}

export default MessageList;
