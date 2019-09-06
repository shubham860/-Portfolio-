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
                <Info/>
              </div>
              <div class='item2'>
                <div class='item2a'>
                  <div class='Resume'>
                  <Link to='/Resume' class='deco'><p class='Specs'>Resume</p></Link>
                  </div>
                </div>
                <div class='item2b'>
                  <div class='Portfolio'>
                    <Link to='/Portfolio' class='deco'><p class='Specs'>Portfolio</p></Link>
                  </div>
                </div>
                <div class='item2c'>
                  <div class='Skills'>
                    <Link to='/Skills' class='deco'><p class='Specs'>Skills</p></Link>
                  </div>
                </div>
                <div class='item2d'>
                  <div class='Contact'>
                    <Link to='/Contact' class='deco'><p class='Specs'>Contact</p></Link>
                  </div>
                </div>
              </div>
            </div>
      )
  }
}

export default Dashboard;
