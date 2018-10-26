import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      img1: '/images/github_logo.png',
      img2: '/images/github_logo.png'
    }
  }

  render() {
    return (
      <footer>
        <div className='nasa-wrapper'>
          <a
            target="_blank"
            className="nasa"
            rel="noopener noreferrer"
            href="https://www.nasa.gov/mission_pages/station/main/index.html"
          >
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
              <a className='git-link'
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/ortizlu"
                onMouseEnter={() => {
                  this.setState({
                    img2: '/images/github_logo2.png'
                  })
                }}
                onMouseLeave={() => {
                  this.setState({
                    img2: '/images/github_logo.png'
                  })
                }}
              >
                <img
                  className="git-logo"
                  src={this.state.img2}
                  alt="Github Link"
                />
                ortizlu
              </a>
            </li>
            <div className="x">
              <p>X</p>
            </div>
            <li className="nick">
              <a className='git-link'
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/ntartaro"
                onMouseEnter={() => {
                  this.setState({
                    img1: '/images/github_logo2.png'
                  })
                }}
                onMouseLeave={() => {
                  this.setState({
                    img1: '/images/github_logo.png'
                  })
                }}
              >
                <img
                  className="git-logo"
                  src={this.state.img1}
                  alt="Github Link"
                />
                ntartaro
              </a>
            </li>
          </ul>
        </div>
      </footer>
    )
  }
}

export default Footer
