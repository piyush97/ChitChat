// ./src/Chat.js

import React, { Component } from 'react'
import { ChatManager, TokenProvider } from '@pusher/chatkit'
import MessageList from './MessageList'

class Chat extends Component {
  state = {
    currentUser: null,
    currentRoom: {},
    messages: []
  }

  componentDidMount() {
    const chatkit = new ChatManager({
      instanceLocator: 'v1:us1:7dd003f0-b349-41c9-a803-866bff746197',
      userId: this.props.currentId,
      tokenProvider: new TokenProvider({
        url:
          'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/7dd003f0-b349-41c9-a803-866bff746197/token'
      })
    })

    chatkit
      .connect()
      .then(currentUser => {
        this.setState({ currentUser })
        console.log('Doing Doing 🤖 You are connected to ChitChat')
        return currentUser.subscribeToRoom({
          roomId: 14660785,
          messageLimit: 100,
          hooks: {
      })
      .catch(error => console.error('error', error))
  }

  render() {
    return (
      <div>
        <h1>Chat Screen</h1>
      </div>
    )
  }
}

export default Chat
