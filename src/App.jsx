import React from 'react';
import Board from './components/Board';
import './styles/root.scss';

const app = () => {
  return (
    <div className="app">
      <h1>Tic Tac Toe Game</h1>
      <Board />
    </div>
  );
};

export default app;
