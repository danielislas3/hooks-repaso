import React, { useEffect, useState } from 'react';
import '../index.css';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;

  useEffect(() => {}, [formState]);

  useEffect(() => {
    console.log('emal ejecutado ');
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };
  return (
    <div>
      <h1>UseEffect</h1>
      <hr />
      <div>
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='tu nombre'
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          type='email'
          name='email'
          className='form-control'
          placeholder='tu email'
          value={email}
          onChange={handleInputChange}
        />
      </div>
      {(name==123)&&<Message/>}
    </div>
  );
};
