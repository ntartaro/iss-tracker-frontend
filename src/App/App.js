import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentlat: '0',
      currentlong: '-20'
    }
  }

  componentDidMount() {
    this.fetchISS()
  }

  fetchISS = () => {
    axios.get('http://api.open-notify.org/iss-now.json').then(response =>
      this.setState({
        currentlat: response.data.iss_position.latitude,
        currentlong: response.data.iss_position.longitude
      })
    )
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <Switch>
            <Route path="/" render={props => <Home {...this.state} />} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
