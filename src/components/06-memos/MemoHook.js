import React, { useMemo } from 'react';
import { useCountrer } from '../../hooks/useCounter';
import { useState } from 'react';
import '../index.css';

export const MemoHook = () => {
  const { counter, increment } = useCountrer(20);
  const [show, setShow] = useState(true);

  const procesoPesado = iteraciones => {
    for (let i = 0; i < iteraciones.length; i++) {
      console.log('====================================');
      console.log('itracioness....');
      console.log('====================================');
    }
    return `${iteraciones} iteraciones realizadas`
  };
  
  const memoProcesado=useMemo(()=>procesoPesado(counter),[counter])
  
  return (
    <div>
      <h1>MemoHook</h1>
      <h3>Counter: {counter}</h3>
      <hr />
      <p>{memoProcesado}</p>
      <button onClick={increment} className='btn btn-primary'>
        +1
      </button>
      <button
        onClick={() => {
          setShow(!show);
          procesoPesado(counter)
        }}
        className='btn btn-outline-primary ml-3'>
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
