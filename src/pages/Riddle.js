import React, { Component } from "react";
import { TextInputField } from "evergreen-ui/commonjs/text-input";

class Riddle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: Array(25).fill("")
    };
  }

  render() {
    const table = this.state.table;
    return (
      <React.Fragment>
        <div className="RiddleBoard">
          {table.map(index => {
            return (
              <input
                key={index}
                className="Riddlesquare"
                type="text"
                bsSize="large"
                //value={table[{ index }]}
                onChange={evt => {
                  this.setState({
                    table: table.push(evt.target.value)
                  });
                }}
              />
            );
          })}
        </div>
        <div>
          <li>1. {table[5]} bor i det röda huset.</li>
        </div>
      </React.Fragment>
    );
  }
}

export default Riddle;
