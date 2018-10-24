import React, { Component } from 'react'
import './Signup.css'

class Signup extends Component {
  handleSubmit = e => {
    e.preventDefault()
    e.stopPropagation()
    if (this.props.username && this.props.password) {
      this.props.handleSignUp()
    } else {
      this.props.changeMessage('Fields cannot be empty.')
    }
  }

  render() {
    return (
      <section className="signup-wrapper">
        <div className="signup-top">
          <p>Sign Up</p>
          <span>{this.props.errormsg}</span>
        </div>
        <div className="signup-main">
          <form onSubmit={this.handleSubmit} className="signup-main-wrapper">
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
              <button className="signup-button">SIGN UP</button>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default Signup
