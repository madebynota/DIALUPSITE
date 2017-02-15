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
        this.showHelpText = this.showHelpText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeUsername(username) {
        var name = username;
        if(name.length > 16) {
            name = username.substring(0, 15);
            this.props.showUsernameFail();
        }
        this.props.onUsernameChange(name);
    }

    setColor(color) {
        this.props.onColorChange(color);
    }

    showHelpText() {
        this.props.showHelpText();
    }

    setInputTextWithCommand(e) {
        let commandText = e.target.dataset.command;
        this.setState({text: commandText});
        document.getElementById('chatInputForm').focus();
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.text == ''){
            return;
        }
        var tokenized_commands = this.state.text.split(" ");
        switch (tokenized_commands[0].toLowerCase()) {
            case "/help":
                this.showHelpText();
                break;
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
                            id="chatInputForm"
                            className={cx('input')}
                            onChange={this.changeHandler}
                            value={this.state.text}
                            autoComplete="off"
                        />
                    </form>
                </div>
                <div className={cx('buttonSection')}>
                    <div className={classNames(cx('button'))}>
                        <a
                            onClick={this.setInputTextWithCommand.bind(this)}
                            data-command="/setname ">
                            Set Username
                        </a>
                    </div>
                    <div className={classNames(cx('button'))}>
                        <a
                            onClick={this.setInputTextWithCommand.bind(this)}
                            data-command="/setcolor ">
                            Set Message Color
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default MessageForm;
