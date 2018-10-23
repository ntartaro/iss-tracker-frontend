import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Switch>
            <Route path="/" render={props => <Home />} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
