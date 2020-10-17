import React from 'react';
import { useCountrer } from '../../hooks/useCounter';

import './index.css';

export const CounterWithCustomHook = () => {
  const { state, reset, increment, decrement } = useCountrer();

  return (
    <div>
      <h1>Counter with hook</h1>
      <br />

      <h2>{state}</h2>
      <button className='btn btn-primary mx-4' onClick={increment}>
        +1
      </button>
      <button className='btn btn-danger mx-4' onClick={decrement}>
        -1
      </button>
      <button className='btn btn-success' onClick={reset}>
        Reset
      </button>
    </div>
  );
};
