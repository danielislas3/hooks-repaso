import React from 'react';
import '../index.css';
import './layout.css';
import { useFetch } from '../../hooks/useFetch';
import { useCountrer } from '../../hooks/useCounter';
import { useLayoutEffect } from 'react';
import { useRef } from 'react';

export const Layout = () => {
  const { counter, increment, decrement } = useCountrer(1);
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  // se evalua si data es null,si da true entonces extrae author, quote de data
  const { author, quote } = !!data && data[0];

  const pTag = useRef();
  useLayoutEffect(() => {
    console.log('====================================');
    console.log(pTag.current.getBoundingClientRect());
    console.log('====================================');
  }, [quote]);

  return (
    <>
      <h1>LayoutEffect</h1>
      <hr />

      <blockquote className='blockquote text-right'>
        <p ref={pTag} className='mb-8'>
          {quote}
        </p>
        <footer className='blockquote-footer'> {author} </footer>
      </blockquote>

      <button className='btn btn-primary' onClick={decrement}>
        Anterior
      </button>
      <button className='btn btn-primary' onClick={increment}>
        Siguiente
      </button>
    </>
  );
};
