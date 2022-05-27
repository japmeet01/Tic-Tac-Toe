import React, { useState } from 'react';
import Board from './components/Board';
import './styles/root.scss';
import { calculateWinner } from './helpers';

const app = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXnext, setIsXNext] = useState(false);

  const winner = calculateWinner(board);

  const message = winner
    ? `Winner is ${winner}`
    : `Next Player is ${isXnext ? 'X' : 'O'}`;

  const handleSquareClick = position => {
    if (board[position] != null || winner) {
      return;
    }
    setBoard(prevState => {
      return prevState.map((square, pos) => {
        if (pos === position) {
          return isXnext ? 'X' : 'O';
        }
        return square;
      });
    });
    setIsXNext(prevState => !prevState);
  };
  return (
    <div className="app">
      <h1>Tic Tac Toe Game</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default app;
