import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import { withRouter } from 'react-router-dom';
import Userpage from '../Userpage/Userpage';
import UserSettings from '../UserSettings/UserSettings';
import NewLocation from '../NewLocation/NewLocation';
import jwtDecode from 'jwt-decode';

class App extends Component {
  constructor() {
    super();

    this.state = {
      error: false,
      errormsg: '',
      username: '',
      password: '',
      isLoggedIn: false,
      currentlat: '0',
      currentlong: '-20',
      city: ''
    };
  }

  componentDidMount() {
    this.changeMessage('');
    //checking to see if there is a user currently logged in
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      });
    } else {
      this.setState({
        isLoggedIn: false
      });
    }
    //fetches the ISS image
    this.fetchISS();
  }

  fetchISS = () => {
    axios
      .get('http://api.open-notify.org/iss-now.json')
      .then(response =>
        this.setState({
          currentlat: response.data.iss_position.latitude,
          currentlong: response.data.iss_position.longitude
        })
      )
      .then(_ => {
        this.fetchCityCountry();
      });
  };

  //fetches the city and country and if found, displays it, otherwise
  //displays over the ocean
  fetchCityCountry = () => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${
          this.state.currentlat
        },${this.state.currentlong}&key=AIzaSyDGpcbl_iqDQvUb-qa_-r1nh3In4QXL-xo`
      )
      .then(response => {
        if (response.data.plus_code.compound_code) {
          this.setState({
            city: response.data.plus_code.compound_code.substring(8)
          });
        } else {
          this.setState({
            city: ''
          });
        }
      });
  };

  //handleInput gets the name from the input, and changes the state of the target's name to be the value of the target. For example, if the user is currently writing on the username input, our onChange will trigger this function, and will update our state above since the name of the input (name="username" in the form component) and the name of the state (username: '' in app.js) are the same
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //this function first prevents default of the button (either in signup or login)
  handleSignUp = () => {
    //axios posts the new user to our backend using the UserInput paremeter
    axios
      .post('http://localhost:3001/users/signup', {
        username: this.state.username,
        password: this.state.password
      })
      //our token is stored and loggedIn is changed to true
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true, errormsg: '' });
        this.props.history.push('/');
      })
      .catch(err => {
        this.setState({
          errormsg: 'Username taken.'
        });
      });
  };

  handleLogin = e => {
    axios
      .post('http://localhost:3001/users/login', {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({
          isLoggedIn: true,
          errormsg: ''
        });
        this.props.history.push('/');
      })
      .catch(err => {
        this.setState({
          errormsg: 'Wrong username/password.'
        });
      });
  };

  handleLogOut = () => {
    //we're setting everything back to default and clearing the local storage so it doesn't keep track of user
    this.setState({
      username: '',
      password: '',
      isLoggedIn: false
    });
    localStorage.clear();
  };

  changeMessage = msg => {
    this.setState({
      errormsg: msg
    });
  };

  render() {
    return (
      <div>
        <Header handleLogOut={this.handleLogOut} />
        <main>
          <Switch>
            <Route
              path="/user/:id/newlocation"
              render={props => <NewLocation />}
            />
            <Route
              path="/user/:id/settings"
              render={props => <UserSettings />}
            />
            <Route path="/user/:id" render={props => <Userpage />} />
            <Route
              path="/login"
              render={props => (
                <Login
                  {...props}
                  username={this.state.username}
                  password={this.state.password}
                  error={this.state.error}
                  errormsg={this.state.errormsg}
                  changeMessage={this.changeMessage}
                  handleInput={this.handleInput}
                  handleLogin={this.handleLogin}
                />
              )}
            />
            <Route
              path="/signup"
              render={props => (
                <Signup
                  {...props}
                  username={this.state.username}
                  password={this.state.password}
                  error={this.state.error}
                  changeMessage={this.changeMessage}
                  errormsg={this.state.errormsg}
                  handleInput={this.handleInput}
                  handleSignUp={this.handleSignUp}
                />
              )}
            />
            <Route
              path="/"
              render={props => (
                <Home
                  {...props}
                  currentlat={this.state.currentlat}
                  currentlong={this.state.currentlong}
                  city={this.state.city}
                  fetchISS={this.fetchISS}
                  fetchCityCountry={this.fetchCityCountry}
                />
              )}
            />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
