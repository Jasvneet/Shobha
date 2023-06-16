import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import { FaRegComment, FaComment, FaRegHeart, FaHeart } from "react-icons/fa";
import {BsBasket2, BsBasket2Fill} from "react-icons/bs"

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
      <div class="dropdown">
        <span>Stores and Services</span>
      <div class="dropdown-content">
        <p>Sephora Powell</p>
      </div>
      </div>
     </li>

     <li>
      <div class="dropdown">
        <span>Community</span>
      <div class="dropdown-content">
        <p>Community Profile</p>
      </div>
      </div>
     </li>

      <li>
        {sessionLinks}
      </li>

      <li id='chat-icon-container'>
      <div id="icon-container" className='dropdown'>
        <span id="original-icon" class="icon"><FaRegComment /></span>
        <span id="replacement-icon" class="icon"><FaComment /></span>
        <div class="dropdown-content">
        <p>Live Chat</p>
      </div>
      </div>
      </li>
        
      <li id='heart-icon-container'>
      <div id="icon-container">
        <span id="original-icon" class="icon"><FaRegHeart /></span>
        <span id="replacement-icon" class="icon"><FaHeart /></span>
      </div>
      </li>

      <li>
        <div>
        <div id="icon-container">
        <span id="original-icon" class="icon"><BsBasket2 /></span>
        <span id="replacement-icon" class="icon"><BsBasket2Fill /></span>
      </div>
        </div>
      </li>
      


    </ul>
  );
}

export default Navigation;