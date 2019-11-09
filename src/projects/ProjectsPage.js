import React, { Component } from 'react'
import Headbar from '../common/Headbar'

class ProjectsPage extends Component {
  render() {
    return (
        <div className="container-fluid">
          <Headbar active="Projects"/>
          Projects
        </div>
    )
  }
}

export default ProjectsPage