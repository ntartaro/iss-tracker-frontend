import React, { Component } from 'react'
import './App.css'
import Header from '../Header/Header'
import Home from '../Home/Home'
import { Link, Route, Switch, Redirect } from 'react-router-dom'

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
      </div>
    )
  }
}

export default App
