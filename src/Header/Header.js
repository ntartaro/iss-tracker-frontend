import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <a className="logo-link" href="/">
            <img src="/images/iss_logo.png" alt="ISS Logo" />
            <p>WOW ISS</p>
          </a>
        </div>
        <ul className="header-signup">
          <a href="/signup">
            <li>Sign-Up</li>
          </a>
          <a href="/login">
            <li>Log In</li>
          </a>
        </ul>
      </header>
    );
  }
}

export default Header;
