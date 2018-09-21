import React, { Component } from 'react';
import ceLogo from './ce-logo.png';
import hLogo from './heimdall-icon.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ceLogo} className="App-logo" alt="logo" />
          <img src={hLogo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Customer Success Heimdall Sandbox Application</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
