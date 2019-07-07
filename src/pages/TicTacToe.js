import React, { Component } from "react";
import cn from "classnames";
import Header from "./Header";
import Footer from "./Footer";
import Timer from "./Timer";

function checkWinner(board) {
  const moves = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];

  for (let i = 0; i < moves.length; i++) {
    const move = moves[i];

    const v0 = board[move[0]];
    const v1 = board[move[1]];
    const v2 = board[move[2]];

    if (v0 !== "" && v0 === v1 && v1 === v2) {
      return move;
    }
  }

  return null;
}

const initialState = {
  gameId: 0,
  //turn: "X",
  board: Array(9).fill(""),
  totalMoves: 0,
  selected: null
};

class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
      games: [],
      timesXWon: 0,
      turn: "X"
    };
  }

  getFirstRoundUpdates = i => {
    if (this.state.board[i] !== "") {
      return null;
    }

    const board = [...this.state.board];
    board[i] = this.state.turn;
    return { board };
  };

  getSecondRoundUpdates = i => {
    const { turn, selected, board } = this.state;
    const clickedSquare = board[i];

    // In round two, we must start by selecting which piece to move.
    if (selected == null) {
      // We are only allowed to select our own piece.
      if (clickedSquare !== turn) {
        return null;
      }

      return { selected: i };
    }

    // When we have a selected piece, we allow changing it to another one of our pieces.
    if (clickedSquare === turn) {
      return { selected: i };
    }

    // It's not allowed to move the selected piece to our opponent's squares.
    if (clickedSquare !== "") {
      return null;
    }

    // Move the selected piece to an empty square.
    const newBoard = [...board];
    newBoard[i] = turn;
    newBoard[selected] = "";
    return { board: newBoard, selected: null };
  };

  handleClick = i => {
    const updates =
      this.state.totalMoves < 6
        ? this.getFirstRoundUpdates(i)
        : this.getSecondRoundUpdates(i);

    if (!updates) {
      return null;
    }

    const {
      board = this.state.board,
      selected = this.state.selected
    } = updates;
    let turn = this.state.turn;
    let totalMoves = this.state.totalMoves;
    let games = [...this.state.games];

    if (board !== this.state.board) {
      turn = turn === "X" ? "O" : "X";
      totalMoves = totalMoves + 1;

      const winningCombination = checkWinner(board);

      if (winningCombination) {
        games.push({
          board,
          totalMoves,
          winner: this.state.turn,
          id: this.state.gameId
        });
      }
    }

    this.setState(
      {
        games,
        turn,
        totalMoves,
        selected,
        board
      },
      () => {
        console.log({ selected: this.state.selected, turn: this.state.turn });
      }
    );
  };

  onTimerEnded = player => {
    let games = [...this.state.games];

    games.push({
      board: this.state.board,
      totalMoves: this.state.totalMoves,
      winner: player === "X" ? "O" : "X",
      id: this.state.gameId
    });

    this.setState({ games });
  };

  handleRestart = () => {
    let { turn, totalMoves } = this.state;

    if (totalMoves % 2 === 0) {
      turn = turn === "X" ? "O" : "X";
    }

    this.setState({
      ...initialState,
      gameId: this.state.gameId + 1,
      turn
    });
  };

  render() {
    const { board, totalMoves, turn, gameId, games } = this.state;
    const lastGame = games[games.length - 1];
    const hasWinner = lastGame && lastGame.id === gameId;
    const xWonCount = games.filter(game => game.winner === "X").length;
    const oWonCount = games.filter(game => game.winner === "O").length;
    const hasMoves = totalMoves > 0;

    return (
      <div id="game">
        <div className={"timer-container"}>
          {this.props.player1Name} is playing X
          <Timer
            key={gameId}
            onTimerEnded={() => {
              this.onTimerEnded("X");
            }}
            seconds={this.props.time}
            increment={this.props.increment}
            isRunning={!hasWinner && hasMoves && turn === "X"}
          />
          games won: {xWonCount}
        </div>
        <div className={"board-container"}>
          <Header totalMoves={totalMoves} />
          {hasWinner && <div>Won: {turn === "X" ? "O" : "X"}</div>}
          <div className={cn("board", { hasWinner })}>
            {board.map((value, index) => {
              return (
                <button
                  key={index}
                  className={cn("square", {
                    isWinning: hasWinner && lastGame.winner === value,
                    isSelected: this.state.selected === index,
                    timesUp: hasWinner
                  })}
                  disabled={hasWinner}
                  onClick={event => {
                    this.handleClick(index);
                  }}
                >
                  {value}
                </button>
              );
            })}
          </div>
          <Footer hasWinner={hasWinner} handleRestart={this.handleRestart} />
        </div>
        <div className={"timer-container"}>
          {this.props.player2Name} is playing O
          <Timer
            key={gameId}
            onTimerEnded={() => {
              this.onTimerEnded("O");
            }}
            seconds={this.props.time}
            increment={this.props.increment}
            isRunning={!hasWinner && hasMoves && turn === "O"}
          />
          games won: {oWonCount}
        </div>{" "}
      </div>
    );
  }
}

export default TicTacToe;
