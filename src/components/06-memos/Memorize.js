import React from 'react';
import { useCountrer } from '../../hooks/useCounter';
import { Small } from './Small';
import { useState } from 'react';
import '../index.css';

export const Memorize = () => {
  const { counter, increment } = useCountrer(10);
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />
      <button onClick={increment} className='btn btn-primary'>
        +1
      </button>
      <button
        onClick={() => {
          setShow(!show);
        }}
        className='btn btn-outline-primary ml-3'>
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
