import React from 'react'
import PropTypes from 'prop-types'
import Info_dup from '../components/Info_dup'
import Nav from '../components/Nav'
import '../css/Resume.css'

class Resume extends React.Component {
  render () {
    return(
        <div class='Resume-container'>
          <div class='infos'>
            <Info_dup/>
          </div>
          <div class='skills'>
            <Nav/>
            <div class='main-container'>
              <div class='about-head'>
                <p class='chead'>Resume</p>
              </div>

              <div class='intro'>
                <p class='intro-lines'>I'm a Frontend Developer and  Machine Learning enthusiast from Moradabad, UP. I aim to make a difference through my creative solution.</p>
              </div>
            </div>
          </div>

        </div>
    )
  }
}
export default Resume;
