import React from 'react'
import PropTypes from 'prop-types'
import '../css/Dashboard.css'
import Info from '../components/Info'
import Resume from '../components/Resume'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Skills from '../components/Skills'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'



class Dashboard extends React.Component {
  render () {
      return(
            <div class='container'>
              <div class='item1'>
                <Info/>
              </div>
              <div class='item2'>
                <div class='item2a'>
                  <Resume/>
                </div>
                <div class='item2b'>
                  <Portfolio/>
                </div>
                <div class='item2c'>
                  <Skills/>
                </div>
                <div class='item2d'>
                  <Contact/>
                </div>
              </div>
            </div>
      )
  }
}

export default Dashboard;
