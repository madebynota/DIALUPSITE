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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.text == ''){
            return;
        }
        var message = {
            user: this.props.user,
            text: this.state.text,
            timestamp: Date.now()
        }
        this.props.onMessageSubmit(message);
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
