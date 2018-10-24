import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: ''
    }
  }
  handleSubmit = e => {
    if (this.props.username && this.props.password) {
      e.preventDefault()
      this.props.handleLogin()
    } else {
      e.preventDefault()
      this.setState({
        error: 'Fields cannot be empty.'
      })
    }
  }

  render() {
    if (this.props.error) {
      this.setState({
        error: 'Username or password is incorrect.'
      })
    }

    return (
      <div>
        <section className="login-wrapper">
          <div className="login-top">
            <p>Log In</p>
            {this.state.error ? <span>{this.state.error}</span> : null}
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
                <button className="login-button" onClick={this.handleSubmit}>
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
