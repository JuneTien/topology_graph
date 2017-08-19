import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopologyGraph from './TopologyGraph';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Demo</h2>
          <h4>This graph is implemented by D3.js</h4>
        </div>
        <div style={{height: '300px'}}>
          <TopologyGraph/>
        </div>
      </div>
    );
  }
}

export default App;
