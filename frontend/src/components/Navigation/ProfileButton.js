import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  // const [showMenu, setShowMenu] = useState(false);
  
  // const openMenu = () => {
  //   if (!showMenu) return;
  //   setShowMenu(true);
  // };

  // const closeMenu = () => {
  //   if (showMenu) {
  //     setShowMenu(false);
  //   }
  // };
  
  // useEffect(() => {
  //   const button = document.querySelector(".profile-button");
  //   button.addEventListener('mouseenter', openMenu);
  //   button.addEventListener('mouseleave', closeMenu);
  
  //   return () => {
  //     button.removeEventListener("mouseenter", openMenu);
  //     button.removeEventListener("mouseleave", closeMenu);
  //   }
  // }, []);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
    <div className="profile-dropdown">
      <button className="profile-button">
     
          <img src='/images/profile-icon-active.svg' className="profile-icon" />
          <span className="user-greeting">Hi, {user.firstname}</span>
        
      </button>
    
        <ul className="dropdown-content">
          <div className="icon-greeting-drop">
            <img src='/images/profile-icon-active.svg' className="profile-icon-drop" />
            <li className="greeting-drop">Happy Shopping, {user.firstname}. 🎉</li>
          </div>
          <div className="divider"></div>
          <li className="logout-button">
            <button onClick={logout}>Sign Out</button>
          </li>
        </ul>
  
    </div>
    </>
  );
}

export default ProfileButton;