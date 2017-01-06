import React from 'react';
import MessageForm from './MessageForm'
import MessageList from './MessageList'
import classNames from 'classnames/bind';
import styles from './styles/ChatPage.css';
import io from 'socket.io-client';

let cx = classNames.bind(styles);
let socket = io('http://localhost:3000');

class ChatPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            messages: [],
            text: ''
        };

        this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
        this._initialize = this._initialize.bind(this);
        this._messageRecieve = this._messageRecieve.bind(this);
        this._userJoined = this._userJoined.bind(this);
        this._userLeft = this._userLeft.bind(this);
    }

    componentDidMount() {
        socket.on('init', this._initialize);
        socket.on('send:message', this._messageRecieve);
        socket.on('user:join', this._userJoined);
        socket.on('user:left', this._userLeft);

        socket.emit('init');
    }

    handleMessageSubmit(message) {
        var {messages} = this.state;
        messages.push(message);
        this.setState({messages});
        socket.emit('send:message', message);
    }

    _initialize(data) {
        console.log(data);
        var {users, messages, name} = data;
        this.setState({users, messages, user: name});
    }

    _messageRecieve(message) {
        var {messages} = this.state;
        messages.push(message);
        this.setState({messages});
    }

    _userJoined(data) {
        var {users, messages} = this.state;
        var {name} = data;
        messages.push({
            user: 'APPLICATION BOT',
            text : name +' Joined'
        });
        this.setState({users, messages});
    }

    _userLeft(data) {
        var {users, messages} = this.state;
        var {name} = data;
        var index = users.indexOf(name);
        users.splice(index, 1);
        messages.push({
            user: 'APPLICATION BOT',
            text : name +' Left'
        });
        this.setState({users, messages});
    }

    render() {
        return (
            <div className={cx('chatPage')}>
                <div className={cx('pageHeader')}>
                    <h1>DIAL UP RADIO CHAT</h1>
                </div>
                <MessageList
                    messages={this.state.messages}
                />
                <MessageForm
                    onMessageSubmit={this.handleMessageSubmit}
                    user={this.state.user}
                />
            </div>

        )
    }
}

export default ChatPage;
