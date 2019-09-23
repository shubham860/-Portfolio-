import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import All from '../components/All'
import ML from '../components/ML'
import Frontend from '../components/Frontend'

class Nav2 extends React.Component {
  render () {
    return(
        <ul class='nav-links'>
          <li><Link to='/Portfolio/'><p class='nav-a'>All</p></Link></li>
          <li><Link to='/Portfolio/Frontend'><p class='nav-a'>Frontend</p></Link></li>
          <li><Link to='/Portfolio/ML'><p class='nav-a'>Machine Learning</p></Link></li>
        </ul>
    )
  }
}

export default Nav2;
