import React, { Component } from 'react'
import './UserSettings.css'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

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

  deleteUser = () => {
    let userid = jwtDecode(localStorage.token).id
    if (localStorage.token) {
      axios
        .delete('http://localhost:3001/users/' + userid, {
          headers: {
            Authorization: localStorage.token
          }
        })
        .then(deletedUser => {
          this.props.handleLogOut()
          this.props.history.push('/')
        })
    }
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
          <div className='logout-warning'>
            <button onClick={this.handleSubmit} className="update-user-button">
              UPDATE
            </button>
            <p className="update-text">This will log you out!</p>
            </div>
            <div className="delete-warning">
              <button className="delete-user-button" onClick={this.deleteUser}>
                DELETE USER
              </button>
              <p className="delete-text">Are you sure?</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default UserSettings
