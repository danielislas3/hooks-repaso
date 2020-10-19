import React from 'react';
import { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import '../index.css';

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formValues;
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formValues)
  }
  useEffect(()=>{
    console.log('====================================');
    console.log('Email cambio');
    console.log('====================================');
  },[email])
  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
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
          placeholder='asd@as.com'
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          type='password'
          name='password'
          className='form-control'
          placeholder='****'
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button className="btn btn-primary" type="submit" >Guardar</button>
    </form>
  );
};
