import React from 'react';
import Message from './Message'
import SendButton from './SendButton'
class ChatInput extends React.Component {
    render() {
        return (
            <div>
                <Message/><SendButton/>
            </div>
        )
    }
}

export default ChatInput;
