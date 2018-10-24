import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    e.stopPropagation()
    if (this.props.username && this.props.password) {
      this.props.handleLogin()
    }
  }

  render() {
    let error
    if (this.state.error) {
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
    )
  }
}

export default Login
