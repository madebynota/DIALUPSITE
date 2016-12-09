import React from 'react';
import ChatInput from './ChatInput'
import styles from './styles/ChatPage.css'

class ChatPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Chatroom Page</h1>
        <ChatInput />
      </div>

    )
  }
}

export default ChatPage;
