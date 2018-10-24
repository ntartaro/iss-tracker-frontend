import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault()

    if (this.props.username && this.props.password) {
      this.props.handleSignUp()
    }
  }

  render() {
    let error
    if (this.props.error) {
      error = 'Username or password is incorrect.'
    } else {
    }
    return (
      <div>
        <section className="login-wrapper">
          <div className="login-top">
            <p>Log In</p>
            <span>{error}</span>
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
              <div className="login-button-wrapper">
                <button className="login-button" onSubmit={this.handleSubmit}>
                  LOG IN
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    )
  }
}

export default Login
