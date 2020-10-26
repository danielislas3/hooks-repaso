import React, { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);
  return (
    <div>
      <h1>Home Screen</h1>
      <hr />

      <button
        className='btn btn-primary'
        onClick={() =>
          setUser({
            id: 5132,
            name: 'pedro',
            email: 'asd@async.com',
          })
        }>
        Login
      </button>
    </div>
  );
};
