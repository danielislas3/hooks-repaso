import React from 'react';
import { useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import '../index.css';
import { useCallback } from 'react';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);
  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  const increment = useCallback((num) => {
    setCounter(c=>c + num);
  }, [setCounter]);
  
  return (
    <div>
      <h1>UseCallback hook {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  );
};
