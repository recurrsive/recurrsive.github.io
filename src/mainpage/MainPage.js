import React, { Component } from 'react'
import SocialsBox from './SocialsBox'
import Headbar from '../common/Headbar'
import './MainPage.css'

class MainPage extends Component {
  render() {
    return (
      <div className="container-fluid main-page">
        <Headbar active="Home"/>
        <div className="vertical-center">
          <SocialsBox/>
        </div>
      </div>
    )
  }
}

export default MainPage