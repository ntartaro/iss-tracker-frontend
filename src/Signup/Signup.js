import React, { Component } from 'react';
import './Signup.css';

class Signup extends Component {
  render() {
    return (
      <section className="signup-wrapper">
        <div className="signup-top">
          <p>Sign Up</p>
        </div>
        <div className="signup-main">
          <p>Username:</p>
          <input type="text" />
          <p>Password:</p>
          <input type="password" />
          <div className="signup-button-wrapper">
            <button className="signup-button">SUBMIT</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Signup;
