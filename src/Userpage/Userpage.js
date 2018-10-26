import React, { Component } from 'react'
import './Userpage.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

class Userpage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        username: '',
        savedLocations: []
      }
    }
  }

  userShow = () => {
    let userid = jwtDecode(localStorage.token).id
    if (localStorage.token) {
      axios
        .get('http://localhost:3001/users/' + userid, {
          headers: {
            Authorization: localStorage.token
          }
        })
        .then(response => {
          this.setState({
            user: response.data
          })
        })
    }
  }

  componentDidMount() {
    this.userShow()
  }

  deleteLocation = () => {
    axios
      .delete(
        'http://localhost:3001/locations/' + this.props.match.params.locationid,
        {
          headers: {
            Authorization: localStorage.token
          }
        }
      )
      .then(deletedLocation => {
        this.props.history.push('/user/' + this.props.match.params.id)
      })
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

                      <button className="location-delete-button" onClick={()=> {
                            axios
                              .delete(
                                'http://localhost:3001/locations/' + location._id,
                                {
                                  headers: {
                                    Authorization: localStorage.token
                                  }
                                }
                              )
                              .then(deletedLocation => {
                                this.props.history.push('/user/' + this.props.match.params.id)
                              })
                      }}>DELETE</button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default Userpage
