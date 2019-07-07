import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Grabbar from "./pages/Grabbar";
import Settings from "./pages/Settings";
import GrabbLiga from "./pages/GrabbLiga";
import Riddle from "./pages/Riddle";

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navigation">
          <Link to="/">Start</Link>
          <Link to="/grabbar">Grabbar</Link>
          <Link to="/grabbliga">GrabbLiga</Link>
          <Link to="/settings">Tic Tac Toe</Link>
          <Link to="/riddle">GrabbGåta</Link>
        </nav>
        <Route exact path="/" render={() => <div>jompahl bajs</div>} />
        <Route path="/grabbar" render={() => <Grabbar />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/grabbliga" render={() => <GrabbLiga />} />
        <Route path="/riddle" render={() => <Riddle />} />
      </Router>
    );
  }
}

export default App;
