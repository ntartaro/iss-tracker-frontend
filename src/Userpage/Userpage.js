import React, { Component } from 'react';
import './Userpage.css';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

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
    // if (localStorage.token) {
    axios
      .get('http://localhost:3001/users/' + this.props.match.params.id, {
        headers: {
          Authorization: localStorage.token
        }
      })
      .then(response => {
        console.log(response);
        this.setState({
          user: response.data
        });
      });
  };
  // };

  componentDidMount() {
    this.userShow();
  }

  render() {
    let name;
    if (localStorage.token) {
      name = jwtDecode(localStorage.token).username;
    }
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
                to={'/user/' + name + '/newlocation'}
              >
                <li>New Location</li>
              </Link>
              <Link className="edit-user-link" to={'/user/' + name + '/edit'}>
                <li>Edit User</li>
              </Link>
            </ul>
          </div>
          <div className="location-wrapper">
            {this.state.user ? (
              this.state.user.savedLocations.map(location => {
                return (
                  <div className="location-card">
                    <Link
                      to={
                        '/user/' +
                        this.props.match.params.id +
                        '/location/' +
                        location._id
                      }
                    >
                      <img src="/images/staticmap.png" alt="location1" />
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

                        <button className="location-delete-button">
                          DELETE
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Userpage;
