import React from 'react';

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
            text: this.state.text
        }
        this.props.onMessageSubmit(message);
        this.setState({text: ''});
    }

    changeHandler(e) {
        this.setState({text: e.target.value});
    }

    render() {
        return (
            <div>
                <h3>Write New Message</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>{this.props.user}
                        <input onChange={this.changeHandler} value={this.state.text}/>
                    </label>
                </form>
            </div>
        );
    }
}

export default MessageForm;
