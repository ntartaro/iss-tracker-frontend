import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 4,
      maptype: 'roadmap'
    };
  }
  zoomOut = () => {
    if (this.state.zoom <= 1) {
      return;
    }
    this.setState({ zoom: this.state.zoom - 1 });
    this.props.fetchCityCountry();
    console.log(this.state.zoom);
    console.log('zoomed');
  };

  zoomIn = () => {
    if (this.state.zoom >= 20) {
      return;
    }
    this.setState({ zoom: this.state.zoom + 1 });
    this.props.fetchCityCountry();
    console.log(this.state.zoom);
    console.log('zoomed');
  };

  mapSatellite = () => {
    if (this.state.maptype === 'satellite') {
      return
    }
    this.setState({maptype: 'satellite'})
    this.props.fetchCityCountry();
    console.log(this.state.maptype);
    console.log('satellite');
  };

  mapDefault = () => {
    if (this.state.maptype === 'roadmap') {
      return
    }
    this.setState({maptype: 'roadmap'})
    this.props.fetchCityCountry();
    console.log(this.state.maptype);
    console.log('roadmap');
  };

  render() {
    return (
      <div className="home">
        <h1>Where Over the World is the ISS?</h1>
        <div>
          <img
            src={
              'https://maps.googleapis.com/maps/api/staticmap?center=' +
              this.props.currentlat +
              ',' +
              this.props.currentlong +
              '&markers=color:red%7Csize:small%7C' +
              this.props.currentlat +
              ',' +
              this.props.currentlong +
              '&maptype=' +
              this.state.maptype +
              '&zoom=' +
              this.state.zoom +
              '&size=400x400&key=AIzaSyDGpcbl_iqDQvUb-qa_-r1nh3In4QXL-xo'
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
          <button className="satellite-button" onClick={this.mapSatellite}>SATELLITE</button>
          <button className="default-button" onClick={this.mapDefault}>DEFAULT</button>
        </div>
        <h2>{this.props.city}</h2>
        <button className="refresh-map" onClick={this.props.fetchISS}>
          Refresh
        </button>
      </div>
    );
  }
}

export default Home;
