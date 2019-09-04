import React from 'react'
import PropTypes from 'prop-types'
import '../css/Dashboard.css'
import Info from '../components/Info'
import Resume from '../components/Resume'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Skills from '../components/Skills'
import {Link} from 'react-router-dom'



class Dashboard extends React.Component {
  render () {
      return(
            <div class='container'>
              <div class='item1'>

              </div>
              <div class='item2'>
                <div class='item2a'>
                  <div>
                  <Link to='/Resume'><h1>Resume</h1></Link>
                  </div>
                </div>
                <div class='item2b'>
                  <Link to='/Portfolio'><h1>Portfolio</h1></Link>
                </div>
                <div class='item2c'>
                <Link to='/Skills'><h1>Skills</h1></Link>
                </div>
                <div class='item2d'>
                  <Link to='/Contact'><h1>Contact</h1></Link>
                </div>
              </div>
            </div>
      )
  }
}

export default Dashboard;
