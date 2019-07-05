import React from 'react'
import { Grabb } from "../Grabb";
import { grabbar } from "../data";

const grabb0 = grabbar[0];
const grabb1 = grabbar[1];
const grabb2 = grabbar[2];
const grabb3 = grabbar[3];
const grabb4 = grabbar[4];
const grabb5 = grabbar[5];
const grabb6 = grabbar[6];
const grabb7 = grabbar[7];
const grabb8 = grabbar[8];
const grabb9 = grabbar[9];

const Grabbar = () => (
    <div>
        <Grabb
          name={grabb0.name}
          attributes={grabb0.attributes}
          total={grabb0.getTotal()}
        >
          <button>Hej</button>
        </Grabb>

        <Grabb
          name={grabb1.name}
          attributes={grabb1.attributes}
          total={grabb1.getTotal()}
        />
        <Grabb
          name={grabb2.name}
          attributes={grabb2.attributes}
          total={grabb2.getTotal()}
        />
        <Grabb
          name={grabb3.name}
          attributes={grabb3.attributes}
          total={grabb3.getTotal()}
        />
        <Grabb
          name={grabb4.name}
          attributes={grabb4.attributes}
          total={grabb4.getTotal()}
        />
        <Grabb
          name={grabb5.name}
          attributes={grabb5.attributes}
          total={grabb5.getTotal()}
        />
        <Grabb
          name={grabb6.name}
          attributes={grabb6.attributes}
          total={grabb6.getTotal()}
        />
        <Grabb
          name={grabb7.name}
          attributes={grabb7.attributes}
          total={grabb7.getTotal()}
        />
        <Grabb
          name={grabb8.name}
          attributes={grabb8.attributes}
          total={grabb8.getTotal()}
        />
        <Grabb
          name={grabb9.name}
          attributes={grabb9.attributes}
          total={grabb9.getTotal()}
        />
    </div>
)

export default Grabbar