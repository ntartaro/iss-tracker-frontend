import React, { Component } from 'react';
import './EditLocation.css';
// import axios from 'axios';

class EditLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      location: ''
    };
  }

  textChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

    // handleSubmit = e => {
    //   e.preventDefault()
    //   axios
    //   .put('http://localhost:3001/locations/' + this, this.state, {
    //     headers: {
    //       Authorization: localStorage.token
    //     }
    //   })
    //   .then(response => {
    //       this.props.history.push(location)
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // }

  render() {
    return (
      <section className="editlocation-wrapper">
        <div className="editlocation-top">
          <p>Edit Location</p>
        </div>
        <div className="editlocation-main">
          <form
            className="editlocation-main-wrapper"
            // onSubmit={this.createLocation}
          >
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.textChange}
            />
            <label htmlFor="location">Location (Coordinates or Address):</label>
            <input
              type="text"
              name="location"
              value={this.state.location}
              onChange={this.textChange}
            />
            <div className="create-button-wrapper">
              <button className="create-button" onClick={this.createLocation}>
                EDIT
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default EditLocation;
