import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import '../css/Nav.css'

class Nav extends React.Component {
  render () {
    return(
      <nav>
        <ul class='nav-links'>
          <li><Link to='/'><p class='nav-a'>Home</p></Link></li>
          <li><Link to='/skills'><p class='nav-a'>About</p></Link></li>
          <li><Link to='/Resume'><p class='nav-a'>Resume</p></Link></li>
          <li><Link to='/Portfolio'><p class='nav-a'>Portfolio</p></Link></li>
          <li><Link to='/Contact'><p class='nav-a'>Contact</p></Link></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;
