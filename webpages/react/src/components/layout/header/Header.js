/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './Header.css';
// import img from './images/user.png';

function Header() {
  return (
    <header>
      <a href="/" id="logo-box">
        <h1>LiMA</h1>
        <h2>Living Meta-Analysis</h2>
      </a>
      <div className="userinfo signedoff">
        <img src="./user.png" alt="user" className="userphoto" />
        <div className="actions">
          <div className="name when-signed-on">
            {/* Signed in as: */}
            <span className="username" />
          </div>
          <div className="g-signin2 signin when-signed-out" />
          <a href="/profile" className="profile when-signed-on">Profile</a>
          <a id="toggle-editing" className="only-if-page-about-you">
            {/* Turn editing */}
            {/* <span className="ifon">off</span>
            <span className="ifoff">on</span> */}
          </a>
          {/* <a className="signout when-signed-on">Sign out</a> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
