import React from 'react'
import PropTypes from 'prop-types'
import '../css/Portfolio.css'
import engilife from '../images/engilife.png'
import alumni from '../images/alumni.png'
import radar from '../images/Radar.png'
class All extends React.Component {
  render () {
    return(
      <div class='all'>
        <div>
          <img src={engilife} class='small'/>
        </div>
        <div>
          <img src={alumni} class='small'/>
        </div>
        <div>
          <img src={radar} class='small'/>
        </div>
      </div>
    )
  }
}

export default All;
