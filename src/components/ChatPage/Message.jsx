import React from 'react';

class Message extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default Message;
