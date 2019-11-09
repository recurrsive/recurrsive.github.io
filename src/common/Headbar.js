import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './Headbar.css'


class Headbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light nav">
          <div className="navbar-brand">Duncan Vogel</div>
          <button className="navbar-toggler" type="button" data-toggle="collapse"
                  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                  aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {this.homeLink()}
              {this.aboutLink()}
              {this.resumeLink()}
              {this.projectsLink()}
            </ul>
          </div>
        </nav>
    )
  }

  homeLink() {
    if (this.props.active === 'Home') {
      return (
          <li className="nav-item active">
            <Link to="/" className="nav-link" href="">Home <span className="sr-only">(current)</span></Link>
          </li>
      )
    }
    else {
      return (
          <li className="nav-item">
            <Link to="/" className="nav-link" href="">Home</Link>
          </li>
      )
    }
  }

  aboutLink() {
    if (this.props.active === 'About Me') {
      return (
          <li className="nav-item active">
            <Link to="/about" className="nav-link" href="">About Me <span className="sr-only">(current)</span></Link>
          </li>
      )
    }
    else {
      return (
          <li className="nav-item">
            <Link to="/about" className="nav-link" href="">About Me</Link>
          </li>
      )
    }
  }

  projectsLink() {
    if (this.props.active === 'Projects') {
      return (
          <li className="nav-item active">
            <Link to="/projects" className="nav-link" href="">Projects <span className="sr-only">(current)</span></Link>
          </li>
      )
    }
    else {
      return (
          <li className="nav-item">
            <Link to="/projects" className="nav-link" href="">Projects</Link>
          </li>
      )
    }
  }

  resumeLink() {
    if (this.props.active === 'Resume') {
      return (
          <li className="nav-item active">
            <Link to="/resume" className="nav-link" href="">Resume <span className="sr-only">(current)</span></Link>
          </li>
      )
    }
    else {
      return (
          <li className="nav-item">
            <Link to="/resume" className="nav-link" href="">Resume</Link>
          </li>
      )
    }
  }
}

Headbar.propTypes = {
  active: PropTypes.string.isRequired
}

export default Headbar