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
                <div class='item2a'>

                </div>
                <div class='item2b'>

                </div>
                <div class='item2c'>

                </div>
                <div class='item2d'>

                </div>
              </div>
            </div>
      )
  }
}

export default Dashboard;
