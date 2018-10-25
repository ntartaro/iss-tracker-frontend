import React, { Component } from 'react'
import './UserSettings.css'

class UserSettings extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  textChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.history.push('/')
    this.props.userUpdate(this.props.user.id, this.state)
  }

  render() {
    return (
      <section className="settings-wrapper">
        <div className="settings-top">
          <p>Edit User</p>
        </div>
        <div className="settings-main">
          <form className="settings-main-wrapper">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              onChange={this.textChange}
              placeholder={this.props.user.username}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              onChange={this.textChange}
              placeholder="*******"
            />
          </form>
          <div className="update-button-wrapper">
            <button onClick={this.handleSubmit} className="update-user-button">
              UPDATE
            </button>
            <div className="warning">
              <button className="delete-user-button">DELETE USER</button>
              <p className="warning-text">Are you sure?</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default UserSettings
