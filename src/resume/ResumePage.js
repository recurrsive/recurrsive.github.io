import React, { Component } from 'react'
import Headbar from '../common/Headbar'
import resume from '../res/resume.pdf'
import { Link } from 'react-router-dom'

class ResumePage extends Component {
  render() {
    return (
        <div className="container-fluid">
          <Headbar active="Resume"/>
          <object data={resume} type="application/pdf" width="100%" height="800px">
            <p>It appears you don't have a PDF plugin for this browser.
              No biggie... you can <Link to="../res/resume.pdf" download target="_self">click here to
                download the PDF file.</Link></p>
          </object>
        </div>
    )
  }
}

export default ResumePage