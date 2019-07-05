import React from "react";

function Header(props) {
  const { totalMoves } = props;

  return (
    <React.Fragment>
      <div id="head">Jompahls Tic Tac Toe</div>
      <div className="totalMoves">Moves: {totalMoves} </div>
    </React.Fragment>
  );
}

export default Header;
