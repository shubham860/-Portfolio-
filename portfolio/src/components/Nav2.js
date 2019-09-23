import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import All from '../components/All'
import Ml from '../components/Ml'
import Frontend from '../components/Frontend'

class Nav2 extends React.Component {
  render () {
    return(
        <ul class='nav-links2'>
          <li><p class='nav-c'>Filters : </p></li>
          <li><Link to='/Portfolio/All'><p class='nav-b'>All</p></Link></li>
          <li><Link to='/Portfolio/Frontend'><p class='nav-b'>Frontend</p></Link></li>
          <li><Link to='/Portfolio/Ml'><p class='nav-b'>Machine Learning</p></Link></li>
        </ul>
    )
  }
}

export default Nav2;
