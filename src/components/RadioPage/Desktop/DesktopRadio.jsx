import React from 'react'

// Components
import MessageForm from './MessageForm'
import MessageList from './MessageList'
import TitleBar from './TitleBar'
import StreamPlayer from './StreamPlayer'

import classNames from 'classnames/bind'
import styles from './styles/DesktopRadio.css'
import io from 'socket.io-client'
import toHex from 'colornames'
import FileSaver from 'file-saver'
import lamejs from 'lamejs'

let cx = classNames.bind(styles);

// Socket.io Setup
let path = 'http://' + window.location.hostname;
if (window.location.hostname == "localhost") {
    path += ":" + window.location.port;
}
let socket = io(path);

class DesktopRadio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            users: [],
            messages: [],
            color: '#ffadc6', // DIAL UP pink
            text: ''
        };

        // Bind all handlers to DesktopPage context 
        this.handleVaultRequest = this.handleVaultRequest.bind(this);
        this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.updateMessagesWithNewUsername = this.updateMessagesWithNewUsername.bind(this);
        this.showHelpText = this.showHelpText.bind(this);

        // Bind all private functions to DesktopPage context
        this._initialize = this._initialize.bind(this);
        this._messageRecieve = this._messageRecieve.bind(this);
        this._userJoined = this._userJoined.bind(this);
        this._userLeft = this._userLeft.bind(this);
        this._userChangedName = this._userChangedName.bind(this);
    }

    componentDidMount() {
        // On connection to server
        socket.on('init', this._initialize);

        // When other users join/leave chatroom
        socket.on('user:join', this._userJoined);
        socket.on('user:left', this._userLeft);

        // When current user changes properties
        socket.on('send:message', this._messageRecieve);
        socket.on('change:username', this._userChangedName);

        // Send initialization message to server
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
        if(users.indexOf(username) != -1) {
            messages.push({
                user: 'DIAL UP BOT',
                text: "SOMEONE ALREADY HAS THAT NAME YOU IDIOT",
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
            user: 'DIAL UP BOT',
            text: botText,
            color: isValid ? newColor : prevColor,
            timestamp: Date.now()
        });

        this.setState({
            messages: messages,
            color: isValid ? newColor : prevColor
        });
    }

    handleVaultRequest(pass){
        var messages = this.state.messages;
        var mp3Enc = lamejs.Mp3Encoder(2, 44100, 192);
        var mp3data = [];

        var leftChannel = new Int16Array(44100); //one second of silence (get your data from the source you have) 
        var rightChannel = new Int16Array(44100); //one second of silence (get your data from the source you have) 
        var sampleBlockSize = 1152; //can be anything but make it a multiple of 576 to make encoders life easier 

        var leftChunk;
        var rightChunk;
        var mp3buf;

        for (var i = 0; i < leftChannel.length; i += sampleBlockSize) {
          leftChunk = leftChannel.subarray(i, i + sampleBlockSize);
          rightChunk = rightChannel.subarray(i, i + sampleBlockSize);
        }


        var blob = new Blob(mp3data, {type: 'audio/mp3'});
        console.log(blob);

        if (pass === "STATIC") {
            var filename = "STATIC.mp3";
            var actualFile = 'http://davidlatimore.me/bbro.mp4';

            FileSaver.saveAs(blob, filename);
        }

        messages.push({
            user: 'DIAL UP BOT',
            text: "WOW. GREAT FIND. SALUTE.",
            color: this.state.color,
            timestamp: Date.now()
        });

        this.setState({
            messages: messages,
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
            user: 'DIAL UP BOT',
            text: oldName + " changed name to " + newName,
            color: this.state.color,
            timestamp: Date.now()
        });

        return messages;
    }

    showHelpText() {
        var {messages} = this.state;
        messages.push({
            user: 'DIAL UP BOT',
            text: 'THIS SHIT IS NOT HARD, Y\'ALL BUGGIN SMGDH. TYPE /setname __________ TO CHANGE YOUR NAME TO __________.\nTYPE /setcolor __________ TO CHANGE YOUR MESSAGE BUBBLE COLOR TO __________. \nIF YOU REALLY NEED ME TO REPEAT THIS TYPE /help (THOUGH THIS SHIT REALLY ISN\'T THAT HARD GOD DAMN)',
            color: this.state.color,
            timestamp: Date.now()
        });
        this.setState({messages});
    }

    _initialize(data) {
        var {users, messages, name, color} = data;
        messages.push({
            user: 'DIAL UP BOT',
            text: 'WELCOME TO THE DIAL UP RADIO CHATROOM. I\'M ONLY GONNA SAY THIS ONCE SO FUCKING LISTEN. TYPE /setname __________ TO CHANGE YOUR NAME TO __________.\nTYPE /setcolor __________ TO CHANGE YOUR MESSAGE BUBBLE COLOR TO __________. \nIF YOU REALLY NEED ME TO REPEAT THIS TYPE /help (THOUGH THIS SHIT REALLY ISN\'T THAT HARD GOD DAMN)',
            color: this.state.color,
            timestamp: Date.now()
        });
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
            user: 'DIAL UP BOT',
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
            user: 'DIAL UP BOT',
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
        return (
            <div>
                <div className={cx('chatWindow')}>
                    <TitleBar userCount={this.state.users.length}/>
                    <MessageList messages={this.state.messages}/>
                    <MessageForm
                        onVaultRequest={this.handleVaultRequest}
                        onMessageSubmit={this.handleMessageSubmit}
                        onColorChange={this.handleColorChange}
                        onUsernameChange={this.handleUsernameChange}
                        showHelpText={this.showHelpText}
                        user={this.state.user}
                        color={this.props.color}
                    />
                </div>
                <StreamPlayer className={cx('streamButton')}/>
            </div>
        )
    }
}

export default DesktopRadio;
