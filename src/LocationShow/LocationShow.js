import React, { Component } from 'react';
import axios from 'axios';
import './LocationShow.css'

class LocationShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 4,
      maptype: 'roadmap',
      currentlat: '',
      currentlong: '',
      locationInfo: {
        title: '',
        location: ''
      }
    };
  }

  getInfo = () => {
    axios
      .get(
        'http://localhost:3001/locations/' + this.props.match.params.locationid,
        {
          headers: {
            Authorization: localStorage.token
          }
        }
      )
      .then(response => {
        console.log(response);
        this.setState({
          locationInfo: {
            title: response.data.title,
            location: response.data.location
          }
        });
      });
  };

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

  fetchISS = () => {
    axios.get('http://api.open-notify.org/iss-now.json').then(response => {
      this.setState({
        currentlat: response.data.iss_position.latitude,
        currentlong: response.data.iss_position.longitude
      });
    });
  };

  componentDidMount() {
    this.getInfo();
    this.fetchISS();
  }

  render() {
    return (
      <div className="home">
        <h1>How Far is My Location From the ISS?</h1>
        <h2>{this.state.locationInfo.title}</h2>
        <div className='distance-wrapper'>
        <div className="user-wrapper">
          <div className="user-settings">
            <p>User Settings</p>
            <ul>
              {/* <Link
                className="new-location-link"
                to={'/user/' + name + '/newlocation'}
              > */}
                <li>New Location</li>
              {/* </Link>
              <Link className="edit-user-link" to={'/user/' + name + '/edit'}> */}
                <li>Edit User</li>
              {/* </Link> */}
            </ul>
          </div>
        </div>

        </div>
        <div className='map-wrapper'>
          <img
            src={
              'https://maps.googleapis.com/maps/api/staticmap?center=' +
              this.state.locationInfo.location +
              '&markers=color:red%7C' +
              this.state.locationInfo.location +
              '&markers=icon:https://i.imgur.com/gS8VxFD.png|' +
              this.state.currentlat +
              ',' +
              this.state.currentlong +
              '&path=' +
              this.state.locationInfo.location +
              '|' +
              this.state.currentlat +
              ',' +
              this.state.currentlong +
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
          <button className="refresh-button" onClick={this.fetchISS}>
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
