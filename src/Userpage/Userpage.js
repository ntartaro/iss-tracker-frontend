import React, { Component } from 'react';
import './Userpage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import url from '../url.js'

class Userpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        savedLocations: []
      }
    };
  }

  userShow = () => {
    let userid = jwtDecode(localStorage.token).id;
    if (localStorage.token) {
      axios
        .get(url + 'users' + userid, {
          headers: {
            Authorization: localStorage.token
          }
        })
        .then(response => {
          this.setState({
            user: response.data
          });
        });
    }
  };

  deleteLocation = location => {
    axios
      .delete(url + 'locations' + location, {
        headers: {
          Authorization: localStorage.token
        }
      })
      .then(deletedLocation => {
        this.userShow();
      });
  };

  componentDidMount() {
    this.userShow();
  }

  render() {
    return (
      <section>
        <div className="user-header-wrapper">
          <div className="user-header">
            <p>User Locations</p>
          </div>
        </div>

        <div className="user-wrapper">
          <div className="user-settings">
            <p>User Settings</p>
            <ul>
              <Link
                className="new-location-link"
                to={'/user/' + this.props.match.params.id + '/location/new'}
              >
                <li>New Location</li>
              </Link>
              <Link
                className="edit-user-link"
                to={'/user/' + this.props.match.params.id + '/edit'}
              >
                <li>Edit User</li>
              </Link>
            </ul>
          </div>
          <div className="location-wrapper">
            {this.state.user.savedLocations.map(location => {
              console.log(location);
              return (
                <div key={location._id} className="location-card">
                  <Link
                    to={
                      '/user/' +
                      this.props.match.params.id +
                      '/location/' +
                      location._id
                    }
                  >
                    <img
                      src={
                        'https://maps.googleapis.com/maps/api/staticmap?center=' +
                        location.location +
                        '&markers=color:red%7Csize:small%7C' +
                        location.location +
                        '&zoom=7&size=400x400&key=AIzaSyDGpcbl_iqDQvUb-qa_-r1nh3In4QXL-xo'
                      }
                      alt="location card"
                    />
                  </Link>
                  <div className="bottom-card">
                    <p>{location.title}</p>
                    <div className="location-button-wrapper">
                      <Link
                        to={
                          '/user/' +
                          this.props.match.params.id +
                          '/location/' +
                          location._id +
                          '/edit'
                        }
                      >
                        <button className="location-edit-button">EDIT</button>
                      </Link>

                      <button
                        className="location-delete-button"
                        onClick={() => {
                          this.deleteLocation(location._id);
                        }}
                      >
                        DELETE
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Userpage;
