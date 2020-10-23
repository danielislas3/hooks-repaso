import React, { useRef } from 'react';
import '../index.css';

export const FocusScreen = () => {
  
  const ref=useRef();

  
  const handleClick = () => { 
    ref.current.select()
    console.log(ref);
    // document.querySelector('input').select();
  
  };

  return (
    <div>
      <h1>FocusScreen</h1>
      <hr />

      <input ref={ref} className='form-control' className='su nombre' />
      <br />
      <button className='btn btn-outline-primary mt-5' onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
