import React, { Component, Fragment } from "react";
import Square from "../components/Square.js";
import "./BoardContainer.css";

class BoardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: [
        { id: 1, value: null },
        { id: 2, value: null },
        { id: 3, value: null }
      ],
      activePlayer: 1
    };
    this.onSquareSelected = this.onSquareSelected.bind(this);
  }

  takeSquare(squareId) {
    const boardArray = this.state.board.map(square => {
      if (square.id === squareId) {
        return { id: square.id, value: this.state.activePlayer };
      } else {
        return square;
      }
    });
    this.setState({ board: boardArray });
    this.changeActivePlayer()
  }
}

changeActivePlayer() {
  
  if (this.state.activePlayer === 1) {
    this.setState({ activePlayer: 2 });
  } else {
    this.setState({ activePlayer: 1 });
  }

  this.setState({ board: boardArray });
}


  render() {
    return (
      <Fragment>
        <h1>TicTacToe</h1>
        <section className="board">
          <Square
            square={this.state.board[0]}
            selectedSquare={this.takeSquare}
          />
          <Square
            square={this.state.board[1]}
            onSquareSelected={this.takeSquare}
          />
        </section>
      </Fragment>
    );
  }
}

export default BoardContainer;
