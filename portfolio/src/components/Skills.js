import React from 'react'
import PropTypes from 'prop-types'
import Info_dup from '../components/Info_dup'
import '../css/Skills.css'

class Skills extends React.Component {
  render () {
    return(
        <div class='skill-container'>
          <div class='infos'>
            <Info_dup/>
          </div>
          <div class='skills' style={{'backgroundColor':'white'}}>
          </div>
        </div>
    )
  }
}

export default Skills;
