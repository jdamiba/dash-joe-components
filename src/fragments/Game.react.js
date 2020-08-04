import React from 'react';
import { Button } from 'react-bulma-components';
import {propTypes, defaultProps} from '../components/Game.react';
import Board from '../components/Board';
import Clock from '../components/Clock'; // Import a component from another file

function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++){
    const [a, b, c] = lines[i];

    // game ends when three squares in the same row, column, or diagonal have the same mark
    if (squares[a] && (squares[a] === squares[b]) && (squares[a] === squares[c]) ){
      return squares[a];
    }
  }
  return null;
}

export default class Game extends React.Component {
    constructor(){
      super();
      this.state = {
        history: [{
          squares: Array(9).fill(null)
        }],
        stepNumber: 0,
        xIsNext: true,
      }
    }

    handleClick(i){
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();

      if (calculateWinner(squares) || squares[i]) {
        return;
      }

      squares[i] = this.state.xIsNext ? '🌞' : '🌚';

      this.setState({
        history: history.concat([{
          squares: squares,
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      });
    }

    jumpTo(step){
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
        }
      );
    }

    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];

      const moves = history.map((step, move) => {
        const desc = move ? 'Go to move #' + move : 'Go to game start';
        return (
          <li key={move}>
            <Button className={move % 2 ? "is-dark" : "is-warning"}
                    rounded onClick={() => this.jumpTo(move)}>
              {desc}
            </Button>
          </li>
        );
      });

      let status;
      const winner = calculateWinner(current.squares);

      if (winner){
        status = "Winner: " + winner;
      } else {
        status = "Next Player is " + (this.state.xIsNext ? '🌞' : '🌚')
      }

      if (this.state.stepNumber === 9){
        status = "Game ends in a tie!"
      }

      return (
        <>
          <div className="top-info">
            <Clock />
            <h1 className="title">Tic-Tac-Toe</h1>
            <p>Tic-tac-toe is a game for two players, who take turns marking the spaces in a 3×3 grid.</p>
            <p>The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.</p>
          </div>
          <div className="game">
            <div className="game-board">
              <Board squares={current.squares} onClick={(i) => this.handleClick(i)}/>
            </div>
            <div className="game-info">
              <h2 className="status">{status}</h2>
              <h2 className="history">Game History</h2>
              <ol>{moves}</ol>
            </div>
          </div>
        </>
      );
    }
  }

  Game.propTypes = propTypes;
  Game.defaultProps = defaultProps;

