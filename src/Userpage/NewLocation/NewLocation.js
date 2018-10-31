import React, { Component } from 'react';
import './NewLocation.css';
import axios from 'axios';

class NewLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      location: ''
    };
  }
  createLocation = e => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/locations/', this.state, {
        headers: {
          Authorization: localStorage.token
        }
      })
      .then(response => {
        console.log('new location created');
        this.props.history.push('/user/' + this.props.user.username);
        this.props.userShow();
      })
      .catch(err => console.log(err));
  };

  changeText = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <section className="edit-form-wrapper">
        <div className="edit-form-top">
          <p className='edit-form-title'>New Location</p>
        </div>
        <div className="edit-form-main">
          <form className="edit-form-form">
            <label htmlFor="title" className="new-location-label">
              Title:
            </label>
            <input
              className="new-location-input"
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.changeText}
            />
            <label htmlFor="location" className="new-location-label">
              Location (Coordinates or Address):
            </label>
            <input
              className="new-location-input"
              type="text"
              name="location"
              value={this.state.location}
              onChange={this.changeText}
            />
            <div className="new-location-button-wrapper">
              <button className="create-button" onClick={this.createLocation}>
                CREATE
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default NewLocation;
