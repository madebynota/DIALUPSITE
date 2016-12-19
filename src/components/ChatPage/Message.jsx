import React from 'react';

class Message extends React.Component {
    render() {
        return (
            <div>
                <strong>{this.props.user}</strong>
                <span>{this.props.message}</span>
            </div>
        )
    }
}

export default Message;
