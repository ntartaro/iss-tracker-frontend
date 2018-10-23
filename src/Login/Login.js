import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div>
        <section className="login-wrapper">
          <div className="login-top">
            <p>Log In</p>
          </div>
          <div className="login-main">
            <form className="login-main-wrapper">
              <label>Username:</label>
              <input type="text" />
              <label>Password:</label>
              <input type="password" />
            </form>
            <div className="login-button-wrapper">
              <button className="login-button">LOG IN</button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
