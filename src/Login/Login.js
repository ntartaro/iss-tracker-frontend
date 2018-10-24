import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    if (this.props.username && this.props.password) {
      this.props.handleLogin();
    } else {
      this.props.changeMessage('Fields cannot be empty.');
    }
  };

  componentWillUnmount() {
    this.props.changeMessage('');
  }

  render() {
    return (
      <div>
        <section className="login-wrapper">
          <div className="login-top">
            <p>Log In</p>
            <span className="error">{this.props.errormsg}</span>
          </div>

          <div className="login-main">
            <form onSubmit={this.handleSubmit} className="login-main-wrapper">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                name="username"
                onChange={this.props.handleInput}
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                onChange={this.props.handleInput}
              />
              <div className="login-button-wrapper">
                <button className="login-button">LOG IN</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
