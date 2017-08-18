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
          <h2>Welcome to React. Hello World</h2>
        </div>
        <div className="App-graph">
        <TopologyGraph/>
        </div>
      </div>
    );
  }
}

export default App;
