import React from 'react'
import PropTypes from 'prop-types'
import Info_dup from '../components/Info_dup'
import Nav from '../components/Nav'
import '../css/Skills.css'

class Skills extends React.Component {
  render () {
    return(
        <div class='skill-container'>
          <div class='infos'>
            <Info_dup/>
          </div>
          <div class='skills'>
            <Nav/>
          <div class='about-container'>
            <div class='about-head'>
              <p class='head'>ABOUT</p>
            </div>
            <div class='details-1'>
              <div class='icon'>
                <ion-icon name="speedometer"></ion-icon>
                <p class='icon-head'>Fast</p>
              </div>
              <div class='icon'><ion-icon name="tablet-portrait"></ion-icon></div>
              <div class='icon'><ion-icon name="bulb"></ion-icon></div>
              <div class='icon'><ion-icon name="rocket"></ion-icon></div>
            </div>
          </div>
          </div>
        </div>
    )
  }
}

export default Skills;
