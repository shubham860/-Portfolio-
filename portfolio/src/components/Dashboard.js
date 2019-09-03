import React from 'react'
import PropTypes from 'prop-types'
import '../css/Dashboard.css'
import Info from '../components/Info'


class Dashboard extends React.Component {
  render () {
      return(
            <div class='container'>
              <div class='item1'>
                <Info/>
              </div>
              <div class='item2'>

              </div>
            </div>
      )
  }
}

export default Dashboard;
