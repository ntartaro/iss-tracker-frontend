import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class Header extends Component {
  handleLogout = e => {
    e.preventDefault()
    this.props.handleLogOut()
    this.props.history.push('/')
  }

  render() {
    console.log(localStorage.token)
    return (
      <header>
        <div className="logo">
          <Link to="/" className="logo-link">
            <img src="/images/iss_logo.png" alt="ISS Logo" />
            <p>WOW-ISS</p>
          </Link>
        </div>
        <ul className="header-signup">
          <Link to="/signup">
            <li>Signup</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <a href="#" onClick={this.handleLogout}>
            <li>Logout</li>
          </a>
        </ul>
      </header>
    )
  }
}

export default withRouter(Header)
