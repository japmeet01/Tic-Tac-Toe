import React, { useState } from 'react';
import Square from './Square';

const board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXnext, setIsXNext] = useState(false);

  const handleSquareClick = position => {
    if (board[position] != null) {
      return;
    }
    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXnext ? 'X' : 'O';
        }
        return square;
      });
    });
    setIsXNext(prev => !prev);
  };
  const renderSquare = pos => {
    return (
      <Square
        value={board[pos]}
        onClick={() => {
          handleSquareClick(pos);
        }}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default board;
