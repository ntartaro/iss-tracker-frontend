import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div />
        <div>
          <ul>
            <li>
              <a href="https://github.com/ntartaro">
                <img src="/images/github_logo.png" />
                <p>ntartaro</p>
              </a>
            </li>
            <li>
              <a href="https://github.com/ortizlu">
                <img src="/images/github_logo.png" />
                <p>ortizlu</p>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
