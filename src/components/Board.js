import React from 'react';
import Square from './Square';

// render 9 squares
class Board extends React.Component {
    renderSquare(i) {
      return <Square number={i}
                     value={this.props.squares[i]}
                     onClick={() => this.props.onClick(i)}/>;
    }

    render() {
      return (
        <>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </>
      );
    }
  }

  Board.defaultProps = {};

  Board.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default Board
