import React, { Component } from 'react';
import './Userpage.css';

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
        <div className="location one">
          <img src="/images/iss_logo.png" />
          <div className="location-button-wrapper">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
        <div className="location two">
          <img src="/images/iss_logo.png" />
        </div>
        <div className="location three">
          <img src="/images/iss_logo.png" />
        </div>
        <div className="location four">
          <img src="/images/iss_logo.png" />
        </div>
        <div className="location five">
          <img src="/images/iss_logo.png" />
        </div>
        <div className="location six">
          <img src="/images/iss_logo.png" />
        </div>
        <div className="location seven">
          <img src="/images/iss_logo.png" />
        </div>
        <div className="location eight">
          <img src="/images/iss_logo.png" />
        </div>
        <div className="location nine">
          <img src="/images/iss_logo.png" />
        </div>
      </div>
    );
  }
}

export default Userpage;
