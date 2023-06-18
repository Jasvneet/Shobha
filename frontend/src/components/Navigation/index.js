import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import { FaRegComment, FaComment, FaRegHeart, FaHeart } from "react-icons/fa";
import {BsCaretRightFill, BsBasket2, BsBasket2Fill} from "react-icons/bs"

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
    <>
    
      <button className="freeShipping-button">
        <div className='freeShipping-text'>
            Get FREE shipping on all orders when you join Beauty Insider. Exclusions/terms apply.†{" "} 
            <strong> LEARN MORE </strong>
            <BsCaretRightFill />
        </div>
      </button>

      <ul className='nav1'>
        <li>
          <NavLink exact to="/" className="home-link">S H O B H A</NavLink>
          <br />
        </li>

      <li>
        <div class="dropdown">
          <button className='nav-button'>Stores and Services</button>
        <div class="dropdown-content">
          <p>Sephora Powell</p>
        </div>
        </div>
      </li>

      <li>
        <div class="dropdown">
          <button className='nav-button'>Community</button>
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
        <div id="icon-container" className='dropdown'>
          <span id="original-icon" class="icon"><FaRegHeart /></span>
          <span id="replacement-icon" class="icon"><FaHeart /></span>
          <div class="dropdown-content">
            <p>Recently Loved</p>
          </div>
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

      <div className="nav2">
        <ul className='nav2-links'>
          <li>
              <a className='nav2-link' href='#'>New</a>
          </li>
          <li>
              <a className='nav2-link' href='#'>Brands</a>
          </li>
          <li>
              <a className='nav2-link' href='#'>Makeup</a>
          </li>
          <li>
              <a className='nav2-link' href='#'>Skincare</a>
          </li>
          <li>
              <a className='nav2-link' href='#'>Hair</a>
          </li>
          <li>
              <a className='nav2-link' href='#'>Fragrance</a>
          </li>
          <li>
              <a className='nav2-link' href='#'>Tools & Brushes</a>
          </li>
          <li>
              <a className='nav2-link' href='#'>Bath & Body</a>
          </li>
          <li>
              <a className='nav2-link' href='#'>Mini Size</a>
          </li>
          <li>
              <a className='nav2-link' href='#'>Gifts</a>
          </li>
          <li>
              <a className='nav2-link' href='#'>Beauty Under $20</a>
          </li>
          <li>
              <a className='nav2-link' href='#'>Sale & Offers</a>
          </li>
          <li>
              <a className='nav2-link' href='#'>Clean Beauty</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;