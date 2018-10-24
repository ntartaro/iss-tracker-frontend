import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <a href="https://www.nasa.gov/mission_pages/station/main/index.html">
            <img
              className="nasa-logo"
              src="/images/nasa2.png"
              alt="NASA Logo"
            />
          </a>
        </div>
        <div>
          <ul>
            <li>
              <a href="https://github.com/ntartaro">
                <img
                  className="git-logo"
                  src="/images/github_logo.png"
                  alt="Github Link"
                />
                <p>ntartaro</p>
              </a>
            </li>
            <li>
              <a href="https://github.com/ortizlu">
                <img
                  className="git-logo"
                  src="/images/github_logo.png"
                  alt="Github Link"
                />
                <p>ortizlu</p>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    )
  }
}

export default Footer
