import React, { Component } from 'react';
import './Signup.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: ''
    }
    this.handleChangeUsername = this.handleChangeUsername.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
  }

  handleChangeUsername(event) {
      this.setState({
          username: event.target.value
      })
      console.log(this.state.username)
  }

    handleChangePassword(event) {
        this.setState({
            password: event.target.value
        })
        console.log(this.state.password)
    }

  render() {
    return (
      <section className="signup-wrapper">
        <div className="signup-top">
          <p>Sign Up</p>
        </div>
        <div className="signup-main">
          <form className="signup-main-wrapper">
            <label>Username:</label>
            <input type="text" value={this.state.username} onChange={this.handleChangeUsername} />
            <label>Password:</label>
            <input type="password" value={this.state.password} onChange={this.handleChangePassword}/>
          </form>
          <div className="signup-button-wrapper">
            <button className="signup-button">SIGN UP</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Signup;
