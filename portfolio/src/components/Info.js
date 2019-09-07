import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Info = (props) => {
  return (
    <div class='Info'>
      <div class='Portfolio'>
        <p class='hi'>Hi, I'm</p>
        <p class='name'>SHUBHAM CHAUHAN</p>
        <p class='Desig'>Frontend Developer</p>
      </div>
      <div class='social-nav'>
        <ul class='social'>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </div>
  )
}

export default Info
