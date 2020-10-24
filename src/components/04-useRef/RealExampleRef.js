import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import '../index.css';

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>RealExampleRef</h1>
      <hr />
      {show && <MultipleCustomHooks />}
      <button onClick={()=>{
        setShow(!show)
      }} 
      className="btn btn-primary">
        Show/hide
      </button>
    </div>
  );
};
