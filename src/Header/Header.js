import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <a className="logo-link" href="/">
            <img src="/images/iss_logo.png" alt="ISS Logo" />
            <p>ISS Tracker</p>
          </a>
        </div>
        <ul className="header-signup">
          <li>Sign-Up</li>
          <li>Log In</li>
        </ul>
      </header>
    );
  }
}

export default Header;
