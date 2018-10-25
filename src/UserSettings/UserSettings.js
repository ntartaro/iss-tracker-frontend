import React, { Component } from 'react';
import './UserSettings.css';

class UserSettings extends Component {
  render() {
    return (
      <section className="settings-wrapper">
        <div className="settings-top">
          <p>Edit User</p>
        </div>
        <div className="settings-main">
          <form className="settings-main-wrapper">
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" />
          </form>
          <div className="update-button-wrapper">
            <button className="update-user-button">UPDATE</button>
            <div className="warning">
              <button className="delete-user-button">DELETE USER</button>
              <p className="warning-text">Are you sure?</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default UserSettings;
