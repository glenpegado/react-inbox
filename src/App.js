import React, { Component } from 'react';
import Toolbar from './components/Toolbar'
import Messages from './components/Messages'


class App extends Component {

  state = {messages: this.props.messages}

  render() {
    return (
      <div className="App">
      <Toolbar/ >
      <Messages messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;
