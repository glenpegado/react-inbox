import React, { Component } from 'react'
import Message from './Message'


class Messages extends Component {

  render() {
    const {messages} = this.props
    return (
      <div className="MessagesComponent">
        {messages.map(message => (
          <Message/ >

        ))}
      </div>
    )
  }
}

export default Messages
