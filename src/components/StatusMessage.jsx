import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);
  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          Next Player is{' '}
          <span
            className={current.isXnext === true ? 'text-green' : 'text-orange'}
          >
            {current.isXnext ? 'X' : 'O'}
          </span>{' '}
        </>
      )}
      {!winner && noMovesLeft && <span>Its a TIE</span>}
    </div>
  );
};

export default StatusMessage;
