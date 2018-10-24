import React, { Component } from 'react';
import './Userpage.css';

class Userpage extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="user-settings">
          <p>User Settings</p>
          <button className="new-location-button">New Location</button>
          <button className="edit-user-button">Edit User</button>
          <button className="delete-user-button">Delete User</button>
        </div>
        <div className="user-locations">
          <p>User Locations</p>
        </div>
        <div className="location one">
          <img src="/images/iss_logo.png" />
          <div className='location-button-wrapper'>
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
