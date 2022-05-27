import React, { useState } from 'react';
import Square from './Square';

const board = ({ board, handleSquareClick, winningSquares }) => {
  // console.log(winningSquares);
  const renderSquare = pos => {
    let isWinningSquare = winningSquares.includes(pos);

    return (
      <Square
        value={board[pos]}
        onClick={() => {
          handleSquareClick(pos);
        }}
        isWinningSquare={isWinningSquare}
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
