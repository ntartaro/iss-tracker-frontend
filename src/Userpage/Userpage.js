import React, { Component } from 'react';
import './Userpage.css';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

class Userpage extends Component {
  render() {
    let name;
    if (localStorage.token) {
      name = jwtDecode(localStorage.token).username;
    }
    return (
      <div className="grid-container">
        <div className="user-settings">
          <p>User Settings</p>
          <ul>
            <a className="new-location-link" href={"/user/" + name + "/newlocation"}>
              <li>New Location</li>
            </a>
            <a className="edit-user-link" href={"/user/" + name + "/edit"}>
              <li>Edit User</li>
            </a>
          </ul>
        </div>
        <div className="user-locations">
          <p>User Locations</p>
        </div>
        <div className="location one">
          <p>Test Title</p>
          <img src="/images/staticmap.png" />
          <div className="location-button-wrapper">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Userpage;
