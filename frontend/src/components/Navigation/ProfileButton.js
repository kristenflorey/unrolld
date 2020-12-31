import React, { useState, useEffect } from "react";
import { useHistory, NavLink } from "react-router-dom"
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import bubbleBop from "../../img/blue-avatar.svg";
import "./Navigation.css";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/")
  };

  return (
    <>
      <div className="user-navbar">
        <div className="nav-links">
          <NavLink to="/rolls" className="rolls-link">Rolls</NavLink>
          <NavLink to="/bars" className="rolls-link">Sushi Bars</NavLink>
        </div>
        <div className="avatar-logout">
          <NavLink to="/profile" className="avatar-button">
            <img className="profile-avatar" alt="avatar"src={bubbleBop} />
          </NavLink>
          <button className="logout-button" onClick={logout}>Log Out</button>
        </div>
      </div>
      {/* {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )} */}
    </>
  );
}

export default ProfileButton;
