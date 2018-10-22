import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <header>
                <div>
                    <a href='/' className='logo'>ISS Tracker</a>
                </div>
                <ul className='header-signup'>
                    <li>Sign-Up</li>
                    <li>Log In</li>
                </ul>
            </header>
        );
    }
}

export default Header;