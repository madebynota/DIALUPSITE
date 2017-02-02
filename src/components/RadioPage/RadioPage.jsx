import React from 'react';
import MessageForm from './MessageForm'
import MessageList from './MessageList'
import TitleBar from './TitleBar'
import StreamPlayer from './StreamPlayer'
import classNames from 'classnames/bind';
import styles from './styles/RadioPage.css';
import io from 'socket.io-client';
import toHex from 'colornames';

let cx = classNames.bind(styles);
let path = 'http://' + window.location.hostname;
if (window.location.hostname == "localhost") {
    path += ":" + window.location.port;
}
let socket = io(path);

class RadioPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            users: [],
            messages: [],
            color: '#ffadc6',
            text: ''
        };

        this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.updateMessagesWithNewUsername = this.updateMessagesWithNewUsername.bind(this);

        this._initialize = this._initialize.bind(this);
        this._messageRecieve = this._messageRecieve.bind(this);
        this._userJoined = this._userJoined.bind(this);
        this._userLeft = this._userLeft.bind(this);
        this._userChangedName = this._userChangedName.bind(this);
    }

    componentDidMount() {
        socket.on('init', this._initialize);
        socket.on('send:message', this._messageRecieve);
        socket.on('user:join', this._userJoined);
        socket.on('user:left', this._userLeft);
        socket.on('change:username', this._userChangedName);

        socket.emit('init');
    }

    handleMessageSubmit(message) {
        var {messages, color} = this.state;

        //Adds color to message
        message.color = color;

        messages.push(message);
        this.setState({messages});
        socket.emit('send:message', message);
    }

    handleUsernameChange(username){
        var {users, messages} = this.state;
        // If username already exists
        if(users.indexOf(username) != -1) { // Yo idk why the fuck this works but it does lmaoooooooo
            messages.push({
                user: 'APPLICATION BOT',
                text: "NAME ALREADY TAKEN YOU IDIOT",
                color: this.state.color,
                timestamp: Date.now()
            });
            this.setState({messages});
        } else {
            // Send username change request to server
            var names = {
                oldName: this.state.user,
                newName: username
            }
            messages = this.updateMessagesWithNewUsername(names.oldName, names.newName, messages);
            this.setState({messages, user: names.newName});
            socket.emit('change:username', names);
        }

    }

    handleColorChange(color){
        var messages = this.state.messages;

        let isHex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
        let isNamedColor = toHex(color) !== undefined;
        let isValid = isHex || isNamedColor;

        let botText = isValid 
                        ? "Changed message color to " + color
                        : "That's not a valid color";

        let newColor = isNamedColor ? toHex(color) : color;
        let prevColor = this.state.color;

        messages.push({
            user: 'APPLICATION BOT',
            text: botText,
            color: isValid ? newColor : prevColor,
            timestamp: Date.now()
        });

        this.setState({
            messages: messages,
            color: isValid ? newColor : prevColor
        });
    }

    updateMessagesWithNewUsername(oldName, newName, messages){
        // Update all corresponding messages with newName
        var messagesLength = messages.length;
        for(var i = 0; i < messagesLength; i++){
            if (messages[i].user == oldName) {
                messages[i].user = newName;
            }
        }

        messages.push({
            user: 'APPLICATION BOT',
            text: oldName + " changed name to " + newName,
            color: this.state.color,
            timestamp: Date.now()
        });

        return messages;
    }

    _initialize(data) {
        var {users, messages, name, color} = data;
        this.setState({
            users, 
            messages, 
            user: name,
            color: color
        });
    }

    _messageRecieve(message) {
        var {messages} = this.state;
        messages.push(message);
        this.setState({messages});
    }

    _userJoined(data) {
        var {messages} = this.state;
        var {users, name} = data;
        messages.push({
            user: 'APPLICATION BOT',
            text: name +' Joined',
            color: this.state.color,
            timestamp: Date.now()
        });
        this.setState({users, messages});
    }

    _userLeft(data) {
        var {messages} = this.state;
        var {users, name} = data;
        messages.push({
            user: 'APPLICATION BOT',
            text: name +' Left',
            color: this.state.color,
            timestamp: Date.now()
        });
        this.setState({users, messages});
    }

    _userChangedName(data) {
        var {users, messages} = this.state;
        var {oldName, newName} = data;

        // Update User List with new name
        var index = users.indexOf(oldName);
        users.splice(index, 1);
        users.push(newName);

        messages = this.updateMessagesWithNewUsername(oldName, newName, messages);
        this.setState({users, messages});

    }

    render() {
        document.body.style.backgroundColor = "#10C0FF";

        return (
            <div>
                <img src = "/img/andrewFace/andrew.png"/>
                <div className={cx('chatWindow')}>
                    <TitleBar userCount={this.state.users.length}/>
                    <MessageList messages={this.state.messages}/>
                    <MessageForm
                        onMessageSubmit={this.handleMessageSubmit}
                        onColorChange={this.handleColorChange}
                        onUsernameChange={this.handleUsernameChange}
                        user={this.state.user}
                        color={this.props.color}
                    />
                </div>
                <StreamPlayer className={cx('streamButton')}/>
                <h3> DIAL UP </h3>
            </div>
        )
    }
}

export default RadioPage;
