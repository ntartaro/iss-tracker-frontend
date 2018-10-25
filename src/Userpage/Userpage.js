import React, { Component } from 'react'
import './Userpage.css'
import { Link } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

class Userpage extends Component {
  render() {
    let name
    if (localStorage.token) {
      name = jwtDecode(localStorage.token).username
    }
    return (
      <div className="grid-container">
        <div className="user-settings">
          <p>User Settings</p>
          <ul>
            <Link
              className="new-location-link"
              to={'/user/' + name + '/newlocation'}
            >
              <li>New Location</li>
            </Link>
            <Link className="edit-user-link" to={'/user/' + name + '/edit'}>
              <li>Edit User</li>
            </Link>
          </ul>
        </div>
        <div className="user-locations">
          <p>User Locations</p>
        </div>
        {this.props.user ? (
          this.props.user.savedLocations.map(location => (
            <div className="location one">
              <p>Test Title</p>
              <img src="/images/staticmap.png" alt='location1' />
              <div className="location-button-wrapper">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <div />
        )}
      </div>
    )
  }
}

Userpage.defaultProps = {
  user: {
    savedLocations: []
  }
}

export default Userpage
