import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomeScreen = () => {
  const {user} = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <h1>Home Screen</h1>
      <hr />
      <h2>Hola {user.name}</h2>
    </div>
  );
};
