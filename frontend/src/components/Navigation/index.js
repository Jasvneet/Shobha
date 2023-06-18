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
        
          <button className='nav-button'>
          <svg class="nav-icon">
          <g>
            <path d="M1.5 24a.5.5 0 01-.5-.5v-20a.5.5 0 01.5-.5h21a.5.5 0 01.5.5v20a.5.5 0 01-.5.5h-21zM22 23V4H2v19h20z"></path>
            <path d="M0 23h24v1H0z"></path>
            <path d="M7.5 24a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v10a.5.5 0 01-.5.5h-9zm8.5-1v-9H8v9h8z"></path>
            <path d="M11.5 13h1v11h-1zM1 6V5h22v1zm0 2V7h22v1zm0 2V9h22v1z"></path>
          </g>
        </svg>
            
            Stores and Services
          </button>
        <div class="dropdown-content">
          <p>Sephora Powell</p>
        </div>
        </div>
      </li>

      <li>
        <div class="dropdown">
         
          <button className='nav-button'>
          <svg class="nav-icon">
            <path d="M3.5 3.914H3v-.5a.5.5 0 0 0-1 0v.5h-.5a.5.5 0 1 0 0 1H2v.5a.5.5 0 1 0 1 0v-.5h.5a.5.5 0 0 0 0-1m5.707 1.5.354-.354a.5.5 0 0 0-.708-.707l-.353.354-.354-.354a.5.5 0 0 0-.707.707l.354.354-.354.354a.5.5 0 0 0 .707.707L8.5 6.12l.353.354a.5.5 0 1 0 .708-.707l-.354-.354v.001Zm-3.639-2.5a.509.509 0 0 1-.51-.5c0-.276.214-.5.49-.5h.02a.5.5 0 0 1 0 1m16 5a.509.509 0 0 1-.51-.5c0-.276.214-.5.49-.5h.02a.5.5 0 1 1 0 1M4 22.364c0-.17.013-.334.025-.5H1.038c.275-1.764 2.014-2.695 3.952-2.933.239-.381.515-.738.825-1.061C2.891 17.926 0 19.32 0 22.364a.5.5 0 0 0 .5.5h3.592c-.06-.16-.09-.33-.092-.5m15-10.5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2m0 5c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3m-14-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2m0 5c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3m13.185 1.006c.31.323.586.68.825 1.062 1.939.237 3.676 1.168 3.95 2.932h-2.985c.013.166.025.33.025.5 0 .176-.036.343-.091.5h3.59c.277 0 .5-.223.5-.5 0-3.044-2.89-4.438-5.814-4.494M6.027 22h11.878c-.25-2.247-2.16-4-4.473-4H10.5a4.507 4.507 0 0 0-4.473 4m12.405 1H5.5a.5.5 0 0 1-.5-.5c0-3.033 2.467-5.5 5.5-5.5h2.932c3.033 0 5.5 2.467 5.5 5.5a.5.5 0 0 1-.5.5m-6.499-13c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2m0 5c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3m4.191-13c-.308 0-.585.118-.725.258a.876.876 0 0 0-.313.645c-.021.345.104.714.31.92.455.562 1.336 1.346 2.082 1.955.475-.388 1.542-1.284 2.045-1.914a1.29 1.29 0 0 0 .349-.96c-.009-.154-.056-.437-.271-.608a.409.409 0 0 1-.044-.039c-.168-.169-.54-.308-.925-.239a.917.917 0 0 0-.701.532c-.164.351-.741.351-.905 0a.915.915 0 0 0-.7-.532A1.076 1.076 0 0 0 16.124 2Zm1.355 4.866a.689.689 0 0 1-.434-.153c-.401-.32-1.753-1.426-2.393-2.224-.371-.368-.601-1.013-.564-1.644.032-.553.262-1.027.647-1.332.388-.394 1.097-.597 1.763-.48.381.066.714.228.98.471a1.94 1.94 0 0 1 .982-.472c.66-.114 1.352.081 1.784.5.373.305.595.771.626 1.314.036.631-.194 1.276-.602 1.684-.607.762-1.956 1.864-2.354 2.182a.697.697 0 0 1-.435.154Z"></path>
          </svg>

            Community
            </button>
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
          <svg width="24" height="24" fill="none" class="chat-icon">
            <g fill="none" fill-rule="evenodd">
              <path d="M11.99 2C6.471 2 2 6.477 2 12s4.472 10 9.99 10a9.936 9.936 0 0 0 5.822-1.874L22 21.25l-1.209-4.517A9.965 9.965 0 0 0 21.98 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.99 2.5C6.748 2.5 2.5 6.753 2.5 12s4.249 9.5 9.49 9.5c2.064 0 3.973-.66 5.53-1.78a.5.5 0 0 1 .422-.077l3.351.9-.985-3.68a.5.5 0 0 1 .043-.367A9.464 9.464 0 0 0 21.479 12a.5.5 0 0 1 1 0c0 1.726-.417 3.355-1.154 4.793l1.158 4.327a.5.5 0 0 1-.613.613l-3.962-1.063a10.435 10.435 0 0 1-5.919 1.83C6.196 22.5 1.5 17.799 1.5 12c0-5.798 4.696-10.5 10.49-10.5a.5.5 0 1 1 0 1z" fill="currentColor"></path>
              <path d="M18.5 10a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0 1a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z" fill="currentColor"></path>
              <path fill="currentColor" d="m14.692 8.885 6.769-7.193.667.629-6.769 7.192z"></path>
            </g>
          </svg>
          {/* <span id="original-icon" class="icon"><FaRegComment /></span>
          <span id="replacement-icon" class="icon"><FaComment /></span> */}
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