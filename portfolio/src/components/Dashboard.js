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

                <Link to='/Resume' class='deco'>
                  <div class='item2a'>
                    <div class='Resume'>
                    <div class='one'><p class='onep'>01</p></div>
                    <p class='Specs'>RESUME</p>
                    </div>
                  </div>
                </Link>


              <Link to='/Portfolio' class='deco'>
                <div class='item2b'>
                  <div class='Portfolio'>
                    <div class='two'><p class='twop'>02</p></div>
                    <p class='Specs'>PORTFOLIO</p>
                  </div>
                </div>
              </Link>

              <Link to='/Skills' class='deco'>
                <div class='item2c'>
                  <div class='Skills'>
                    <div class='two'><p class='twop'>03</p></div>
                    <p class='Specs'>SKILLS</p>
                  </div>
                </div>
              </Link>

              <Link to='/Contact' class='deco'>
                <div class='item2d'>
                  <div class='Contact'>
                    <div class='two'><p class='twop'>04</p></div>
                    <p class='Specs'>CONTACT</p>
                  </div>
                </div>
              </Link>  

              </div>
            </div>
      )
  }
}

export default Dashboard;
