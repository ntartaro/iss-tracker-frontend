import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
  render() {
    return (
      <div>
        <section className="login-wrapper">
          <div className="login-top">
            <p>Log In</p>
          </div>
          <div className="login-main">
            <p>Username:</p>
            <input type="text" />
            <p>Password:</p>
            <input type="password" />
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
