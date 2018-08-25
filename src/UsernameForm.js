// ./src/UsernameForm.js

import React, { Component } from 'react'
import { TextInput } from 'react-desktop/macOs'
import { Button } from 'react-desktop/macOs'

class UsernameForm extends Component {
  constructor() {
    super()
    this.state = {
      username: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleSubmit(this.state.username)
  }

  handleChange = e => {
    this.setState({ username: e.target.value })
  }

  render() {
    return (
      <div className="username-form">
        <form onSubmit={this.handleSubmit}>
          <div>
            <TextInput
              label="Username:"
              placeholder="For example, @PiyushMehta"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
           <center><Button color="blue" type="submit">
              Submit Username
            </Button>
            </center>
          </div>
        </form>
      </div>
    )
  }
}

export default UsernameForm
