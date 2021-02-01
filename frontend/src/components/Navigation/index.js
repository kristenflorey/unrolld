import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormPage from '../LoginFormPage';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login" className='signup'>SIGN IN</NavLink>
        <NavLink to="/signup" className='signup'>CREATE A NEW ACCOUNT</NavLink>
      </>
    );
  }

  return (
    <div className='nav-bar'>
      <NavLink to="/" className='unrolld'>UNROLLD</NavLink>
      <div>
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
