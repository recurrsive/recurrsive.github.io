import React, { Component } from 'react'
import Headbar from '../common/Headbar'

class AboutMePage extends Component {
  render() {
    return (
        <div className="container-fluid">
          <Headbar active="About Me"/>
          About
        </div>
    )
  }
}

export default AboutMePage