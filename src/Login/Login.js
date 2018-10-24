import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.handleLogin()
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <section className="login-wrapper">
          <div className="login-top">
            <p>Log In</p>
          </div>

          <div className="login-main">
            <form className="login-main-wrapper">
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
            </form>
            <div className="login-button-wrapper">
              <button className="login-button" onClick={this.handleSubmit}>
                LOG IN
              </button>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Login
