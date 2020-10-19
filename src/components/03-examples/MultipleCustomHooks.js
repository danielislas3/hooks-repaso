import React from 'react';
import '../index.css';
import { useFetch } from '../../hooks/useFetch';
import { useCountrer } from '../../hooks/useCounter';

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCountrer(1);
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quoter</h1>
      <hr />
      {loading ? (
        <div className='alert alert-info text center'>Loading...</div>
      ) : (
        <blockquote className='blockquote text-right'>
          <p className='mb-8'>{quote}</p>
          <footer className='blockquote-footer'> {author} </footer>
        </blockquote>
      )}

      <button className='btn btn-primary' onClick={decrement}>
        Anterior
      </button>
      <button className='btn btn-primary' onClick={increment}>
        Siguiente
      </button>
    </>
  );
};
