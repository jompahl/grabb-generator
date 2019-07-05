import React, { Component } from "react";
import TicTacToe from "./TicTacToe";
//import TicTacToe from "./pages/TicTacToe";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1Name: "",
      player2Name: "",
      time: "3",
      increment: "2",
      didstart: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    /*alert("A name was submitted: " + this.state.value);
    event.preventDefault();*/
    this.setState({ didstart: true });
  }

  render() {
    const { player1Name, player2Name, time, increment, didstart } = this.state;

    if (didstart) {
      return <TicTacToe {...this.state} />;
    }
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label>
          Player 1 Name:
          <input
            type="text"
            value={player1Name}
            onChange={evt => {
              this.setState({ player1Name: evt.target.value });
            }}
          />
        </label>
        <label>
          Player 2 Name:
          <input
            type="text"
            value={player2Name}
            onChange={evt => {
              this.setState({ player2Name: evt.target.value });
            }}
          />
        </label>
        <label>
          Time:
          <input
            type="text"
            value={time}
            onChange={evt => {
              this.setState({ time: evt.target.value });
            }}
          />
        </label>
        <label>
          Time increment:
          <input
            type="text"
            value={increment}
            onChange={evt => {
              this.setState({ increment: evt.target.value });
            }}
          />
        </label>
        <input className="submit" type="submit" value="Submit" />
      </form>
    );
  }
}

/*constructor(props) {
    super(props);
    this.state = {
      player1: "",
      player1Time: "",
      player1Increment: "",
      player2: "",
      player2Time: "",
      player2Increment: "",
      didStart: false
    };
  }

  isInputNumber(evt) {
    var ch = String.fromCharCode(evt.which);

    if (!/[0-9]/.test(ch)) {
      evt.preventDefault();
    }
  }

  render() {
    const {
      player1,
      player2,
      didStart,
      player1Time,
      player1Increment,
      player2Time,
      player2Increment
    } = this.state;

    if (didStart) {
      return <TicTacToe {...this.state} />;
    }

    return (
      <div id="settings">
        <div className="player">
          <label>Player 1 name: </label>
          <input
            className="input"
            value={player1}
            onChange={evt => {
              this.setState({ player1: evt.target.value });
            }}
          />
          <input
            className="input"
            value={player1Time}
            onChange={evt => {
              this.setState({ player1Time: evt.target.value });
            }}
          />
          <input
            className="input"
            type="numeric"
            value={player1Increment}
            onChange={evt => {
              this.setState({ player1Increment: evt.target.value });
            }}
          />
        </div>
        <div className="player">
          <input
            className="input"
            value={player2}
            onChange={evt => {
              this.setState({ player2: evt.target.value });
            }}
          />
          <input
            className="input"
            value={player2Time}
            onChange={evt => {
              this.setState({ player2Time: evt.target.value });
            }}
          />
          <input
            className="input"
            value={player2Increment}
            onChange={evt => {
              this.setState({ player2Increment: evt.target.value });
            }}
          />
        </div>
        <button
          className="submitSettings"
          onClick={() => {
            this.setState({ didStart: true });
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}*/

export default Settings;
