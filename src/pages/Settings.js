import React, { Component } from "react";
import TicTacToe from "./TicTacToe";
import { Button, TextInputField, Pane, SelectField } from "evergreen-ui";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1Name: "",
      player2Name: "",
      time: "3",
      increment: "2",
      didstart: false
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
      <Pane
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        marginTop={50}
      >
        <Pane
          width={600}
          padding={20}
          borderRadius={3}
          border="default"
          display="flex"
          flexDirection="column"
        >
          <TextInputField
            label=" Player 1"
            placeholder="Firstname Lastname"
            value={player1Name}
            onChange={evt => {
              this.setState({ player1Name: evt.target.value });
            }}
          />
          <TextInputField
            label=" Player 2"
            placeholder="Firstname Lastname"
            value={player2Name}
            onChange={evt => {
              this.setState({ player2Name: evt.target.value });
            }}
          />
          <TextInputField
            type="number"
            label="Time"
            placeholder="10"
            value={time}
            onChange={evt => {
              this.setState({ time: evt.target.value });
            }}
          />
          <SelectField
            label="Time increment"
            value={increment}
            onChange={evt => {
              this.setState({ increment: evt.target.value });
            }}
          >
            {Array.from({ length: 11 }, (key, index) => (
              <option key={index} value={index}>
                {index}
              </option>
            ))}
          </SelectField>
          <Pane display="flex" justifyContent="flex-end">
            <Button
              appearance="primary"
              onClick={this.handleSubmit}
              iconBefore="tick-circle"
            >
              Start Game
            </Button>
          </Pane>
        </Pane>
      </Pane>
    );
  }
}

export default Settings;
