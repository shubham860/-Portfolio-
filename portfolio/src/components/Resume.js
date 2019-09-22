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
                <p class='intro-lines'>I'm a <span class='work'>Frontend Developer &  Machine Learning enthusiast</span> from Moradabad, UP. I aim to make a difference through my creative solution.</p>
              </div>

              <div class='about-intro'>
                <div class='lines'>
                  <p class='options-details'><span class='options'>Name :  </span> Shubham Chauhan</p>
                  <p class='options-details'><span class='options'>Date of birth :  </span> September 28, 1997</p>
                </div>

                <div class='lines'>
                  <p class='options-details'><span class='options'>Address :  </span> Street no. 2 Line Par majhola, Moradabad</p>
                  <p class='options-details'><span class='options'>Email :  </span> <a href='mailto: shubham.chauhan860@gmail.com' class='tel'>Shubham.chauhan860@gmail.com</a></p>
                </div>

                <div class='lines'>
                  <p class='options-details'><span class='options'>Mobile no :  </span> <a href='tel:+918791555171' class='tel'>+918791555171</a></p>
                  <p class='options-details'><span class='options'>Skype :  </span> Shubham860</p>
                </div>

                <div class='about-head' style={{marginTop : "40px"}}>
                  <p class='chead'>Skills</p>
                </div>
              </div>

            </div>
          </div>

        </div>
    )
  }
}
export default Resume;
