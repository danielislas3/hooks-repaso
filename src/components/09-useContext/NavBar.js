import React from 'react';
import { NavLink } from 'react-router-dom';
export const NavBar = () => {
  return (
    <ul className='nav nav-pills nav-fill mb-4 bg-dark'>
      <li className='nav-item'>
        <NavLink
          exact
          activeClassName='active'
          className=' nav item nav-link '
          to='/'>
          Home
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink
          exact
          activeClassName='active'
          className=' nav item nav-link'
          to='/about'>
          About
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink
          exact
          activeClassName='active'
          className=' nav item nav-link'
          to='/login'>
          Login
        </NavLink>
      </li>
    </ul>
  );
};
