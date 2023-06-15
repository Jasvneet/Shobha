import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SignupFormModal from '../SignupFormPage';

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
        <LoginFormModal />
        
       
      </>
    );
  }

  return (
    <ul className='nav-links'>
      <li>
        <NavLink exact to="/" className="home-link">S H O B H A</NavLink>
        <br />
      </li>

     <li>

     </li>

      <li>
        {sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;