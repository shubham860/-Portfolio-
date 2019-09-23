import React from 'react'
import PropTypes from 'prop-types'
import Info_dup from '../components/Info_dup'
import Nav from '../components/Nav'
import '../css/Portfolio.css'

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
              </div>
          </div>
        </div>
    )
  }
}

export default Portfolio;
