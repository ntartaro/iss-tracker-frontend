import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './LocationShow.css';

class LocationShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 4,
      maptype: 'roadmap',
      ISSlat: '',
      ISSlong: '',
      userLocationInfo: {
        title: '',
        location: ''
      },
      userDistanceInfo: {
        userLat: '',
        userLong: ''
      },
      distanceBetween: ''
    };
  }

  zoomOut = () => {
    if (this.state.zoom <= 1) {
      return;
    }
    this.setState({ zoom: this.state.zoom - 1 });
  };

  zoomIn = () => {
    if (this.state.zoom >= 20) {
      return;
    }
    this.setState({ zoom: this.state.zoom + 1 });
  };

  mapSatellite = () => {
    if (this.state.maptype === 'hybrid') {
      return;
    }
    this.setState({ maptype: 'hybrid' });
  };

  mapDefault = () => {
    if (this.state.maptype === 'roadmap') {
      return;
    }
    this.setState({ maptype: 'roadmap' });
  };

  getInfo = () => {
    axios
      .get(
        'https://localhost:3001/locations/' + this.props.match.params.locationid,
        {
          headers: {
            Authorization: localStorage.token
          }
        }
      )
      .then(response => {
        this.setState({
          userLocationInfo: {
            title: response.data.title,
            location: response.data.location
          }
        });
      })
      .then(_ => this.fetchISSCoordinates());
  };

  fetchISSCoordinates = () => {
    axios
      .get('https://api.open-notify.org/iss-now.json')
      .then(response => {
        this.setState({
          ISSlat: response.data.iss_position.latitude,
          ISSlong: response.data.iss_position.longitude
        });
      })
      .then(_ => this.getUserCoordinates());
  };

  getUserCoordinates = () => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${
          this.state.userLocationInfo.location
        }&key=AIzaSyDGpcbl_iqDQvUb-qa_-r1nh3In4QXL-xo`
      )
      .then(response => {
        this.setState({
          userDistanceInfo: {
            userLat: response.data.results[0].geometry.location.lat,
            userLong: response.data.results[0].geometry.location.lng
          }
        });
      })
      .then(_ => this.distanceFormula());
  };

  distanceFormula = () => {
    var p1lat = this.state.userDistanceInfo.userLat;
    var p1long = this.state.userDistanceInfo.userLong;
    var p2lat = this.state.ISSlat;
    var p2long = this.state.ISSlong;
    var rad = function(x) {
      return (x * Math.PI) / 180;
    };

    // var R = 6371;    // Earth’s mean radius in kilometer
    var R = 3959;       // Earth's mean radius in miles
    var dLat = rad(p2lat - p1lat);
    var dLong = rad(p2long - p1long);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(p1lat)) *
        Math.cos(rad(p2lat)) *
        Math.sin(dLong / 2) *
        Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    console.log(Math.round(d)); 
    this.setState({
      distanceBetween: Math.round(d)
    })
  };

  deleteLocation = () => {
    axios
      .delete(
        'https://localhost:3001/locations/' + this.props.match.params.locationid,
        {
          headers: {
            Authorization: localStorage.token
          }
        }
      )
      .then(deletedLocation => {
        this.props.history.push('/user/' + this.props.match.params.id);
      });
  };

  componentDidMount() {
    this.getInfo();
  }

  render() {
    return (
      <div className="home">
        <h1>How Far is My Location From the ISS?</h1>
        <h2>{this.state.userLocationInfo.title} is about {this.state.distanceBetween} miles away</h2>
        <div className="distance-wrapper">
          <div className="user-wrapper-2">
            <div className="user-settings">
              <p>Map Settings</p>
              <ul>
                <Link to="/">
                  <li>Home Page</li>
                </Link>
                <Link to={'/user/' + this.props.match.params.id}>
                  <li>User Page</li>
                </Link>
                <Link
                  to={
                    '/user/' +
                    this.props.match.params.id +
                    '/location/' +
                    this.props.match.params.locationid +
                    '/edit'
                  }
                >
                  <li>Edit Location</li>
                </Link>
                <li onClick={this.deleteLocation} className="super-delete">
                  Delete Location
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="map-wrapper">
          <img
            src={
              'https://maps.googleapis.com/maps/api/staticmap?center=' +
              this.state.userLocationInfo.location +
              '&markers=color:red%7C' +
              this.state.userLocationInfo.location +
              '&markers=icon:https://i.imgur.com/gS8VxFD.png|' +
              this.state.ISSlat +
              ',' +
              this.state.ISSlong +
              '&path=' +
              this.state.userLocationInfo.location +
              '|' +
              this.state.ISSlat +
              ',' +
              this.state.ISSlong +
              '&maptype=' +
              this.state.maptype +
              '&zoom=' +
              this.state.zoom +
              '&size=1400x550&key=AIzaSyDGpcbl_iqDQvUb-qa_-r1nh3In4QXL-xo'
            }
            alt="map of where the ISS is"
          />
        </div>
        <div className="map-buttons-wrapper">
          <button className="zoom-in-button" onClick={this.zoomIn}>
            ZOOM +
          </button>
          <button className="zoom-out-button" onClick={this.zoomOut}>
            ZOOM -
          </button>
          <button className="refresh-button" onClick={this.fetchISSCoordinates}>
            REFRESH
          </button>
          <button className="satellite-button" onClick={this.mapSatellite}>
            SATELLITE
          </button>
          <button className="default-button" onClick={this.mapDefault}>
            STANDARD
          </button>
        </div>
      </div>
    );
  }
}

export default LocationShow;
