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
      <div>
        {table.map(index => {
          return <TextInputField key={index} label="Info" />;
        })}
      </div>
    );
  }
}

export default Riddle;
