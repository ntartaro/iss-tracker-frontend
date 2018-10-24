import React, { Component } from 'react';
import './Userpage.css'

class Userpage extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="user-welcome">
          <p>Welcome, User</p>
          <button>New Location</button>
        </div>
        <div className='location-1'><img src='/images/iss_logo.png' /></div>
        <div className='location-2'><img src='/images/iss_logo.png' /></div>
        <div className='location-3'><img src='/images/iss_logo.png' /></div>
        <div className='location-4'><img src='/images/iss_logo.png' /></div>
        <div className='location-5'><img src='/images/iss_logo.png' /></div>
        <div className='location-6'><img src='/images/iss_logo.png' /></div>
        <div className='location-7'><img src='/images/iss_logo.png' /></div>
        <div className='location-8'><img src='/images/iss_logo.png' /></div>
        <div className='location-9'><img src='/images/iss_logo.png' /></div>
      </div>
    );
  }
}

export default Userpage;
