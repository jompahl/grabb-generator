import React, { Component } from "react";
//import { TextInputField } from "evergreen-ui/commonjs/text-input";

class Riddle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: Array(25).fill(""),
      houseNumber: [1, 2, 3, 4, 5],
      houseInfo: ["Color", "Name", "Newspaper", "Drink", "Pet"]
    };
  }

  handleInput = (info, index) => {
    const table = [...this.state.table];
    table[index] = info;
    return table;
  };

  render() {
    const table = this.state.table;
    const houseNumber = this.state.houseNumber;
    const houseInfo = this.state.houseInfo;
    return (
      <React.Fragment>
        <div className="riddleScreen">
          <div className="houseInfo">
            {houseInfo.map((value, index) => {
              return <div key={index}>{houseInfo[index]}</div>;
            })}
          </div>
          <div className="centerRiddle">
            <div className="houseNumber">
              {houseNumber.map((value, index) => {
                return <div key={index}>{houseNumber[index]}</div>;
              })}
            </div>
            <div className="RiddleBoard">
              {table.map((value, index) => {
                return (
                  <input
                    key={index}
                    className="Riddlesquare"
                    type="text"
                    //value={table[{ index }]}
                    onChange={evt => {
                      //   const table2 = table.splice();

                      console.log(table);
                      const tableNew = this.handleInput(
                        evt.target.value,
                        index
                      );
                      this.setState({ table: tableNew });

                      //   this.setState(prevState => {
                      //     const { table } = prevState;
                      //     table: table.splice(index, 0, evt.target.value);
                      //   });
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div className="infoList">
            <li>
              1. {table[7]} bor i det {table[2]}a huset.
            </li>
            <li>
              2. {table[9]} har en {table[24]} som husdjur.
            </li>
            <li>
              3. {table[6]} dricker {table[16]}.
            </li>
            <li>
              4. Det {table[3]}a huset ligger direkt till vänster om det{" "}
              {table[4]}a huset.
            </li>
            <li>
              5. Den som bor i det {table[3]}a huset dricker {table[18]}.
            </li>
            <li>
              6. Husägaren som läser {table[12]} har en {table[22]} som husdjur.
            </li>
            <li>
              7. Den som bor i det {table[0]}a huset läser {table[10]}.
            </li>
            <li>8. Den som bor i huset i mitten dricker {table[17]}.</li>
            <li>9. {table[5]} bor i det första huset.</li>
            <li>
              10. Husägaren som läser {table[11]} bor bredvid den som har en{" "}
              {table[20]} som husdjur.
            </li>
            <li>
              11. Husägaren som har ett {table[21]} som husdjur bor bredvid den
              som läser {table[10]}.
            </li>
            <li>
              12. Husägaren som läser {table[14]} dricker {table[19]}.
            </li>
            <li>
              13. {table[8]} läser {table[13]}.
            </li>
            <li>
              14. {table[5]} bor bredvid det {table[1]}a huset.
            </li>
            <li>
              15. Husägaren som läser {table[11]} bor bredvid den som dricker{" "}
              {table[15]}.
            </li>
            <li>Fråga: Vem har en {table[23]} som husdjur?</li>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Riddle;
