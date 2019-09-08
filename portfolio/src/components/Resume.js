import React from 'react'
import PropTypes from 'prop-types'
import Info_dup from '../components/Info_dup'
import Nav from '../components/Nav'

class Resume extends React.Component {
  render () {
    return(
        <div class='skill-container'>
          <div class='infos'>
            <Info_dup/>
          </div>
          <div class='skills'>
            <Nav/>
            <div>
              <h1>Resume</h1>
            </div>
          </div>
        </div>
    )
  }
}

export default Resume;
