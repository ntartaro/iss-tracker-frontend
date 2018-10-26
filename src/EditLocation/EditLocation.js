import React, { Component } from 'react'
import './EditLocation.css'
import axios from 'axios'

class EditLocation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updatedTitle: '',
      updatedLocation: '',
      locationInfo: {
        title: '',
        location: ''
      }
    }
  }

  textChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    axios
      .put(
        'https://issdb.herokuapp.com/locations/' +
          this.props.match.params.locationid,
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
        )
      })
      .catch(error => {
        console.log(error)
      })
  }

  componentDidMount() {
    axios
      .get(
        'https://issdb.herokuapp.com/locations/' +
          this.props.match.params.locationid,
        {
          headers: {
            Authorization: localStorage.token
          }
        }
      )
      .then(response => {
        this.setState({
          locationInfo: {
            title: response.data.title,
            location: response.data.location
          }
        })
      })
  }

  render() {
    return (
      <section className="editlocation-wrapper">
        <div className="editlocation-top">
          <p>Edit Location</p>
        </div>
        <div className="editlocation-main">
          <form
            className="editlocation-main-wrapper"
            onSubmit={this.handleSubmit}
          >
            <label htmlFor="updatedTitle">Title:</label>
            <input
              type="text"
              name="updatedTitle"
              placeholder={this.state.locationInfo.title}
              value={this.state.updatedTitle}
              onChange={this.textChange}
            />
            <label htmlFor="updatedLocation">
              Location (Coordinates or Address):
            </label>
            <input
              type="text"
              name="updatedLocation"
              placeholder={this.state.locationInfo.location}
              value={this.state.updatedLocation}
              onChange={this.textChange}
            />
            <div className="create-button-wrapper">
              <button className="create-button">EDIT</button>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default EditLocation
