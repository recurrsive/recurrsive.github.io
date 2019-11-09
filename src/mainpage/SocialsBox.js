import React, { Component } from 'react'
import portrait from '../res/portrait.jpg'
import linkedin_icon from '../res/linkedin_icon.png'
import github_icon from '../res/github_icon.svg'
import gmail_icon from '../res/gmail_icon.png'
import './SocialsBox.css'


class SocialsBox extends Component {
  static LINKEDIN = 'https://www.linkedin.com/in/duncan-vogel/'
  static GITHUB = 'https://github.com/recurrsive'
  static EMAIL = 'vogel.d@husky.neu.edu'

  render() {
    return (
        <div className="container">
          <div className="row format-row">
            <div className="col format-row-left"/>
            <div className="col format-row-center">
              <div className="name text-center">
                Duncan Vogel
              </div>
              <span className="portrait">
                <img className="portrait-img img-fluid" src={portrait}/>
              </span>
              <div className="row socials">
                <div className="col text-center">
                  <a href={SocialsBox.LINKEDIN}>
                    <img className="social-icon linkedin-icon" src={linkedin_icon}/>
                  </a>
                </div>
                <div className="col text-center">
                  <a href={SocialsBox.GITHUB}>
                    <img className="social-icon github-icon" src={github_icon}/>
                  </a>
                </div>
                <div className="col text-center">
                  <a href={'mailto:' + SocialsBox.EMAIL}>
                    <img className="social-icon email-icon" src={gmail_icon}/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col format-row-right"/>
          </div>
        </div>
    )
  }
}

export default SocialsBox