import React, { Component } from 'react'
import './Signup.css'

class Signup extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state()
  // }

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleSignUp()
    this.props.history.push('/')
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
          </form>
          <div className="signup-button-wrapper">
            <button className="signup-button" onClick={this.handleSubmit}>
              SIGN UP
            </button>
          </div>
        </div>
      </section>
    )
  }
}

export default Signup
