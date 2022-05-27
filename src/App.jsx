import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';

import { calculateWinner } from './helpers';
import './styles/root.scss';

const app = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXnext: true },
  ]);

  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];

  const winner = calculateWinner(current.board);

  const message = winner
    ? `Winner is ${winner}`
    : `Next Player is ${current.isXnext ? 'X' : 'O'}`;

  const handleSquareClick = position => {
    if (current.board[position] != null || winner) {
      return;
    }
    setHistory(prevState => {
      const last = prevState[prevState.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXnext ? 'X' : 'O';
        }
        return square;
      });
      return prevState.concat({ board: newBoard, isXnext: !last.isXnext });
    });

    setCurrentMove(prevState => prevState + 1);
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe Game</h1>
      <h2>{message}</h2>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
      <History
        history={history}
        moveTo={move => setCurrentMove(move)}
        currentMove={currentMove}
      />
    </div>
  );
};

export default app;
