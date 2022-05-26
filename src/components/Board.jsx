import React from 'react';
import Square from './Square';

const board = () => {
  return (
    <div>
      <div>
        <Square value={0} />
        <Square value="X" />
        <Square value={0} />
      </div>
      <div>
        <Square value={2} />
        <Square value={1} />
        <Square value={2} />
      </div>
      <div>
        <Square value={2} />
        <Square value={2} />
        <Square value={2} />
      </div>
    </div>
  );
};

export default board;
