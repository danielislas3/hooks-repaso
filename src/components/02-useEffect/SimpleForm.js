import React, { useEffect, useState } from 'react';
import '../index.css';

export const SimpleForm = () => {
  
  
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });
  
  
  const { name, email } = formState;
  
  useEffect(() => {
    console.log('holi');
  }, []);
  
  const handleInputChange=(e)=>{
    console.log(e.target.name);
  }
  return (
    <div>
      <h1>UseEffect</h1>
      <hr/>
      <div>
        <input type='text' name='name' className='form-control' placeholder="tu nombre" value={name} onChange={handleInputChange}/>
      </div>
    </div>
  );
};
