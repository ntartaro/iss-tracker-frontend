import React, { Component } from 'react'
import './UserSettings.css'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

class UserSettings extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      currentName: '',
      currentId: ''
    }
  }

  textChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  userUpdate = e => {
    e.preventDefault()
    if (localStorage.token) {
      axios
        .put(
          'https://issdb.herokuapp.com/users/' + this.state.currentId,
          {
            username: this.state.username,
            password: this.state.password
          },
          {
            headers: {
              Authorization: localStorage.token
            }
          }
        )
        .then(response => {
          console.log('user changed!')
          this.props.handleLogOut()
        })
        .then(_ => {
          this.props.history.push('/')
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  deleteUser = () => {
    if (localStorage.token) {
      axios
        .delete('https://issdb.herokuapp.com/users/' + this.state.currentId, {
          headers: {
            Authorization: localStorage.token
          }
        })
        .then(deletedUser => {
          console.log('user deleted!')
          this.props.handleLogOut()
        })
        .then(_ => {
          this.props.history.push('/')
        })
    }
  }

  componentDidMount() {
    if (localStorage.token) {
      this.setState({
        currentName: jwtDecode(localStorage.token).username,
        currentId: jwtDecode(localStorage.token).id
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
              placeholder={this.state.currentName}
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
            <div className="logout-warning">
              <button onClick={this.userUpdate} className="update-user-button">
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
