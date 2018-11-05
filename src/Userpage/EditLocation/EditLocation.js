import React, { Component } from 'react';
import './EditLocation.css';
import axios from 'axios';
import url from '../url.js';

class EditLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedTitle: '',
      updatedLocation: '',
      locationInfo: {
        title: '',
        location: ''
      }
    };
  }

  textChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .put(
        url + 'locations/' + this.props.match.params.locationid,
        {
          title: this.state.updatedTitle,
          location: this.state.updatedLocation
        },
        {
          headers: {
            Authorization: localStorage.token
          }
        }
      )
      .then(response => {
        this.props.history.push(
          '/user/' +
            this.props.match.params.id +
            '/location/' +
            this.props.match.params.locationid
        );
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    axios
      .get(url + 'locations/' + this.props.match.params.locationid, {
        headers: {
          Authorization: localStorage.token
        }
      })
      .then(response => {
        this.setState({
          locationInfo: {
            title: response.data.title,
            location: response.data.location
          }
        });
      });
  }

  render() {
    return (
      <section className="edit-form-wrapper">
        <div className="edit-form-top">
          <p className="edit-form-title">Edit Location</p>
        </div>
        <div className="edit-form-main">
          <form className="edit-form-form" onSubmit={this.handleSubmit}>
            <label htmlFor="updatedTitle" className="edit-location-label">
              Title:
            </label>
            <input
              className="edit-location-input"
              type="text"
              name="updatedTitle"
              placeholder={this.state.locationInfo.title}
              value={this.state.updatedTitle}
              onChange={this.textChange}
            />
            <label htmlFor="updatedLocation" className="edit-location-label">
              Location (Coordinates or Address):
            </label>
            <input
              className="edit-location-input"
              type="text"
              name="updatedLocation"
              placeholder={this.state.locationInfo.location}
              value={this.state.updatedLocation}
              onChange={this.textChange}
            />
            <div className="edit-location-button-wrapper">
              <button className="edit-button">EDIT</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default EditLocation;
