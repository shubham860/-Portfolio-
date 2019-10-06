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
        <div class='image-container' >
          <img src={engilife} class='port-image'/>
            <div class="middle">
               <div class="text"> <a href="https://www.w3schools.com/css/css3_2dtransforms.asp" target="_blank">View</a> </div>
              </div>
        </div>

        <div class='image-container' >
          <img src={engilife} class='port-image'/>
            <div class="middle">
               <div class="text"><a href="https://www.w3schools.com/css/css3_2dtransforms.asp" target="_blank">View</a> </div>
              </div>
        </div>

        <div class='image-container' >
          <img src={engilife} class='port-image'/>
            <div class="middle">
               <div class="text"> <a href="https://www.w3schools.com/css/css3_2dtransforms.asp" target="_blank">View</a> </div>
              </div>
        </div>
      </div>
    )
  }
}

export default All;
