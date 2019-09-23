import React from 'react'
import PropTypes from 'prop-types'
import Info_dup from '../components/Info_dup'
import Nav from '../components/Nav'
import '../css/Portfolio.css'
import {Link} from 'react-router-dom'
import All from '../components/All'
import ML from '../components/ML'
import Frontend from '../components/Frontend'

class Portfolio extends React.Component {
  render () {
    return(
        <div class='Portfolio-container'>
          <div class='infos'>
            <Info_dup/>
          </div>
          <div class='skills'>
            <Nav/>
              <div class='start'>
                <div class='about-head'>
                  <p class='chead'>PORTFOLIO</p>
                </div>

                <div class='filters'>
                    <ul class='nav-links'>
                      <li><Link to='/Portfolio/'><p class='nav-a'>Home</p></Link></li>
                      <li><Link to='/Portfolio/Frontend'><p class='nav-a'>Resume</p></Link></li>
                      <li><Link to='/Portfolio/ML'><p class='nav-a'>Portfolio</p></Link></li>
                    </ul>
                </div>
              </div>
          </div>
        </div>
    )
  }
}

export default Portfolio;
