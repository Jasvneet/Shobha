import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
      
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Sign In</NavLink>
        <br/>
        <NavLink to="/signup">Create Account</NavLink>
      </>
    );
  }

  return (
    <ul className='nav-links'>
      <li>
        <NavLink exact to="/" className="home-link">Shobha</NavLink>
        <br />
      </li>
      <li>
        {sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;