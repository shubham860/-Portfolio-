import React from 'react'
import PropTypes from 'prop-types'
import '../css/Portfolio.css'
import Frontend from '../components/Frontend'
import Ml from '../components/Ml'



class All extends React.Component {
  render () {
    return(
      <div>
        <Frontend/>
        <Ml/>
      </div>
    )
  }
}

export default All;
