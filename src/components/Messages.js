import React, { Component } from 'react';
import Message from './Message';

class Messages extends Component {
  render() {
    const { messages, toggleStar, toggleSelect } = this.props;
    return (
      <div className="Messages">
        {messages.map(message => (
          <Message
            key={message.id}
            message={message}
            toggleStar={toggleStar}
            toggleSelect={toggleSelect}
          />
        ))}
      </div>
    );
  }
}

export default Messages;
