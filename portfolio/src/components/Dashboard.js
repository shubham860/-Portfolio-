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
                  <div class='one'><p class='onep'>01</p></div>
                  <Link to='/Resume' class='deco'><p class='Specs'>RESUME</p></Link>
                  </div>
                </div>
                <div class='item2b'>
                  <div class='Portfolio'>
                    <div class='two'><p class='twop'>02</p></div>
                    <Link to='/Portfolio' class='deco'><p class='Specs'>PORTFOLIO</p></Link>
                  </div>
                </div>
                <div class='item2c'>
                  <div class='Skills'>
                    <div class='two'><p class='twop'>03</p></div>
                    <Link to='/Skills' class='deco'><p class='Specs'>SKILLS</p></Link>
                  </div>
                </div>
                <div class='item2d'>
                  <div class='Contact'>
                    <div class='two'><p class='twop'>04</p></div>
                    <Link to='/Contact' class='deco'><p class='Specs'>CONTACT</p></Link>
                  </div>
                </div>
              </div>
            </div>
      )
  }
}

export default Dashboard;
