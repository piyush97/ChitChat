// ./src/App.js

import React, { Component } from 'react'
import UsernameForm from './UsernameForm'
import Chat from './Chat'

class App extends Component {
  state = {
    currentUsername: null,
    currentId: null,
    currentScreen: 'usernameForm'
  }

  onUsernameSubmitted = username => {
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          currentId: data.id,
          currentUsername: data.name
        })
      })
      .catch(error => {
        console.error('error', error)
      })
  }

  render() {
    return <UsernameForm handleSubmit={this.onUsernameSubmitted} />
  }
}

export default App
