import React, { Component } from "react";
import { Table, Combobox, Radio, Checkbox, Button } from "evergreen-ui";
import { grabbar } from "../data";
//import { GrabbModel } from "./GrabbModel";

class GrabbLiga extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winsSelected: false,
      win: false,
      grabb: null,
      points: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  winOrNot() {
    if (this.state.win === false) {
      return "han vann inte grabbkampen";
    } else {
      return "han vann även grabbkampen";
    }
  }

  handleClick(event) {
    const { grabb, points, win } = this.state;

    if (grabb !== null && points !== null) {
      for (var object in grabbar) {
        if (grabbar[object].name === grabb) {
          grabbar[object].results.push({ points, win });
          const winOrNot = this.winOrNot;
          alert(
            "Du uppdaterade " +
              grabb +
              " han fick " +
              points +
              " poäng " +
              winOrNot
          );
          return;
        }
      }
    }
  }

  render() {
    const winsSelected = this.state.winsSelected;
    const win = this.state.win;
    console.log(this.state.grabb);
    console.log(this.state.points);
    console.log(this.state.win);

    if (!winsSelected) {
      grabbar.sort(function(a, b) {
        return b.points - a.points;
      });
    } else {
      grabbar.sort(function(a, b) {
        return b.wins - a.wins;
      });
    }

    return (
      <div>
        <div>
          <Table>
            <Table.Head>
              <Table.TextHeaderCell>Grabb</Table.TextHeaderCell>
              <Table.TextHeaderCell
                isSelectable
                onSelect={() => this.setState({ winsSelected: true })}
              >
                Vinster
              </Table.TextHeaderCell>
              <Table.TextHeaderCell>Poäng</Table.TextHeaderCell>
            </Table.Head>
            <Table.Body height={480}>
              {grabbar.map(grabb => (
                <Table.Row
                  key={grabb.name}
                  isSelectable
                  onSelect={() =>
                    alert("Du valde " + grabb.name + " han har vunnit ")
                  }
                >
                  <Table.TextCell>{grabb.name}</Table.TextCell>
                  <Table.TextCell>{grabb.wins}</Table.TextCell>
                  <Table.TextCell isNumber>{grabb.points}</Table.TextCell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
        <div className="addScore">
          <Combobox
            items={grabbar.map(grabb => grabb.name)}
            placeholder="Grabb"
            onChange={selected => this.setState({ grabb: selected })}
          />
          <Combobox
            items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
            placeholder="Poäng"
            onChange={selected => this.setState({ points: selected })}
          />
          <Checkbox
            label="Vinst"
            checked={win}
            onChange={e => this.setState({ win: e.target.checked })}
          />
        </div>
        <Button
          className="submitScore"
          iconBefore="tick-circle"
          color="success"
          marginLeft={10}
          onClick={this.handleClick}
        >
          Sumbit
        </Button>
      </div>
      //   <Table>
      //     <Table.Head>
      //       <Table.TextHeaderCell>Grabb</Table.TextHeaderCell>
      //       <Table.TextHeaderCell>Vinster</Table.TextHeaderCell>
      //       <Table.TextHeaderCell>Poäng</Table.TextHeaderCell>
      //     </Table.Head>
      //     <Table.Body height={100}>
      //       {/* <Table.Row isSelectable> */}
      //       {grabbar.map(x => (
      //         <Table.Row key={x.name} isSelectable>
      //           <Table.TextCell>{x.name + x.attributes[0]}</Table.TextCell>
      //         </Table.Row>
      //       ))}
      //       <Table.TextCell>{}</Table.TextCell>
      //       <Table.TextCell isNumber>{}</Table.TextCell>
      //       {/* </Table.Row> */}
      //     </Table.Body>
      //   </Table>
    );
  }
}

export default GrabbLiga;
