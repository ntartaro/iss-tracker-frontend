import React, { Component } from 'react'
import './Signup.css'

class Signup extends Component {
  handleSubmit = e => {
    if (this.props.username && this.props.password) {
      e.preventDefault()
      this.props.handleSignUp()
    }
  }

  render() {
    return (
      <section className="signup-wrapper">
        <div className="signup-top">
          <p>Sign Up</p>
        </div>
        <div className="signup-main">
          <form className="signup-main-wrapper">
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
            <div className="signup-button-wrapper">
              <button className="signup-button" onSubmit={this.handleSubmit}>
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default Signup
