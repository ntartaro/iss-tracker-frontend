import React, { Component } from 'react'
import './Userpage.css'
import axios from 'axios'

class Userpage extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="user-settings">
          <p>User Settings</p>
          <ul>
            <a className="new-location-link" href="/user/:id/newlocation">
              <li>New Location</li>
            </a>
            <a className="edit-user-link">
              <li>Edit User</li>
            </a>
          </ul>
        </div>
        <div className="user-locations">
          <p>User Locations</p>
        </div>
        {this.props.user ? (
          this.props.user.savedLocations.map(location => (
            <div className="location one">
              <p>Test Title</p>
              <img src="/images/staticmap.png" />
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
