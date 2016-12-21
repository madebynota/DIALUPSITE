import React from 'react';

class Message extends React.Component {
    render() {
        return (
            <div>
                <p><strong>{this.props.user}</strong>: {this.props.text}</p>
            </div>
        )
    }
}

export default Message;
