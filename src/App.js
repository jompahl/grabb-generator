import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    const aggression = 93

    return (
      <div className="App">
        <div className="Mbappe">
        </div>
        <div className="card">
          <div className="Aggression">
            {aggression}
          </div>
          <div className="skillz">
            PAC
          </div>
        </div>
      </div>
    );
  }
}

export default App;
