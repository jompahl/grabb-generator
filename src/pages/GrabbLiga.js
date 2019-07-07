import React, { Component } from "react";
import { Table } from "evergreen-ui";
import { grabbar } from "../data";
//import { GrabbModel } from "./GrabbModel";

// const grabb0 = grabbar[0];
// const grabb1 = grabbar[1];
// const grabb2 = grabbar[2];
// const grabb3 = grabbar[3];
// const grabb4 = grabbar[4];
// const grabb5 = grabbar[5];
// const grabb6 = grabbar[6];
// const grabb7 = grabbar[7];
// const grabb8 = grabbar[8];
// const grabb9 = grabbar[9];
// const grabbList = [
//   grabb0,
//   grabb1,
//   grabb2,
//   grabb3,
//   grabb4,
//   grabb5,
//   grabb6,
//   grabb7,
//   grabb8,
//   grabb9
// ];

class GrabbLiga extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Table scroll=false>
        <Table.Head>
          <Table.TextHeaderCell>Grabb</Table.TextHeaderCell>
          <Table.TextHeaderCell>Vinster</Table.TextHeaderCell>
          <Table.TextHeaderCell>Poäng</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={240}>
          {grabbar.map(grabb => (
            <Table.Row
              key={grabb.name}
              isSelectable
              onSelect={() =>
                alert("Du valde " + grabb.name + " han är en fin grabb")
              }
            >
              <Table.TextCell>{grabb.name}</Table.TextCell>
              <Table.TextCell>{grabb.wins}</Table.TextCell>
              <Table.TextCell isNumber>{grabb.points}</Table.TextCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
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
