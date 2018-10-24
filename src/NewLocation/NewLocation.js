import React, { Component } from 'react';
import './NewLocation.css';

class NewLocation extends Component {
  render() {
    return (
      <section className="newlocation-wrapper">
        <div className="newlocation-top">
          <p>New Location</p>
        </div>
        <div className="newlocation-main">
          <form className="newlocation-main-wrapper">
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" />
            <label htmlFor="location">Location (Coordinates or Address):</label>
            <input type="text" name="location" />
          </form>
          <div className="create-button-wrapper">
            <button className="create-button">CREATE</button>
          </div>
        </div>
      </section>
    );
  }
}

export default NewLocation;
