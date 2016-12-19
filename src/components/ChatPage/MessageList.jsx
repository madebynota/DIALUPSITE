import React from 'react';
import Message from './Message'

class MessageList extends React.Component {
    render() {
        return (
            <div>
                <h2>Conversation</h2>
                {this.props.messages.map((message, i) => {
                    return (
                        <Message user={message.user} text={message.text}/>
                    );
                })
            }
            </div>
        );
    }
}

export default MessageList;
