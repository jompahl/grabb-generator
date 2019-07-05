import React from "react";
import { MdRefresh } from 'react-icons/md'

function Footer(props) {
    const hasWinner = props.hasWinner;
    const handleRestart = props.handleRestart;
    
  return (
    <div id="footer">
      {hasWinner ? (
        <button className="againButton" onClick={handleRestart}>
          Play Again?
        </button>
      ) : (
        <button className="resetButton" onClick={handleRestart}>
          <MdRefresh />
          <span>Reset</span>
        </button>
      )}
    </div>
  );
}

export default Footer;
