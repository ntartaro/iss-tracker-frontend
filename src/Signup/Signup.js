import React, { Component } from 'react';
import './Signup.css';

class Signup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="signup-wrapper">
        <div className="signup-top">
          <p>Sign Up</p>
        </div>
        <div className="signup-main">
          <form className='signup-main-wrapper'>
            <label>Username:</label>
            <input type="text" />
            <label>Password:</label>
            <input type="password" />
          </form>
          <div className="signup-button-wrapper">
            <button className="signup-button">SUBMIT</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Signup;
