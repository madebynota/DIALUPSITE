import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles/MessageForm.css';

let cx = classNames.bind(styles);

class MessageForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.changeUsername = this.changeUsername.bind(this);
        this.setColor = this.setColor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeUsername(username) {
        this.props.onUsernameChange(username);
    }

    setColor(color) {
        this.props.onColorChange(color);
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.text == ''){
            return;
        }
        var tokenized_commands = this.state.text.split(" ");
        switch (tokenized_commands[0].toLowerCase()) {
            case "/setname":
                if (tokenized_commands[1] != null) {
                    this.changeUsername(tokenized_commands[1]);
                }
                break;
            case "/setcolor":
                if (tokenized_commands[1] != null) {
                    this.setColor(tokenized_commands[1]);
                }
                break;
            case "/roast":
                console.log("Roast Request towards: " + tokenized_commands[1]);
                break;
            default:
                var message = {
                    user: this.props.user,
                    text: this.state.text,
                    color: this.props.color,
                    timestamp: Date.now()
                }
                this.props.onMessageSubmit(message);
        }
        this.setState({text: ''});
    }

    changeHandler(e) {
        this.setState({text: e.target.value});
    }

    render() {
        return (
            <div className={cx('inputSection')}>
                <div className={cx('messageForm')}>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            className={cx('input')}
                            onChange={this.changeHandler}
                            value={this.state.text}
                        />
                    </form>
                </div>
                <div className={cx('buttonSection')}>
                    <div className={classNames(cx('button'))}>
                        Change Username
                    </div>
                    <div className={classNames(cx('button'))}>
                        Set Message Color
                    </div>
                </div>
            </div>
        );
    }
}

export default MessageForm;
