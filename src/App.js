import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Grabbar from "./pages/Grabbar";
import Settings from "./pages/Settings";

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navigation">
          <Link to="/">Start</Link>
          <Link to="/grabbar">Grabbar</Link>
          <Link to="/generator">Generator</Link>
          <Link to="/Settings">Tic Tac Toe</Link>
        </nav>
        <Route exact path="/" render={() => <div>jompahl bajs</div>} />
        <Route path="/grabbar" render={() => <Grabbar />} />
        <Route path="/Settings" render={() => <Settings />} />
      </Router>
    );
  }
}

export default App;
