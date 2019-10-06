import React from 'react'
import PropTypes from 'prop-types'
import '../css/Portfolio.css'
import engilife from '../images/engilife.png'
import alumni from '../images/alumni.png'
import radar from '../images/Radar.png'
import reacthub from '../images/reacthub.png'
import weather from '../images/weather.png'
import book from '../images/bookmarker.png'
import aarambh from '../images/aarambh.png'
import todo from '../images/todo.png'
import homie from '../images/Homie.png'


class All extends React.Component {
  render () {
    return(
      <div>
      <div class='all'>
        <div class='image-container' >
          <img src={engilife} class='port-image'/>
            <div class="middle">
              <div>
                <h4>EngiLife</h4>
              </div>
               <div class="text">
                 <a href="https://www.engilife.com/" target="_blank">Visit</a>
               </div>
              </div>
        </div>

        <div class='image-container' >
          <img src={alumni} class='port-image'/>
            <div class="middle">
              <div>
                <h4>MIT alumni</h4>
              </div>
               <div class="text">
                 <a href="https://mitalumni.in/" target="_blank">Visit</a>
               </div>
              </div>
        </div>

        <div class='image-container' >
          <img src={radar} class='port-image'/>
            <div class="middle">
              <div>
                <h4>Dashboard</h4>
              </div>
               <div class="text">
                 <a href="https://reactassignment.surge.sh/" target="_blank">Visit</a>
               </div>
              </div>
        </div>

      </div>

      <div class='all'>
        <div class='image-container' >
          <img src={reacthub} class='port-image'/>
            <div class="middle">
              <div>
                <h4>ReactHub</h4>
              </div>
               <div class="text">
                 <a href="https://reacthub.surge.sh/" target="_blank">Visit</a>
               </div>
              </div>
        </div>

        <div class='image-container' >
          <img src={weather} class='port-image'/>
            <div class="middle">
              <div>
                <h4>Weather app</h4>
              </div>
               <div class="text">
                 <a href="https://scweather.surge.sh/" target="_blank">Visit</a>
               </div>
              </div>
        </div>

        <div class='image-container' >
          <img src={book} class='port-image'/>
            <div class="middle">
              <div>
                <h4>Webmarker</h4>
              </div>
               <div class="text">
                 <a href="https://webmarker.surge.sh/" target="_blank">Visit</a>
               </div>
              </div>
        </div>
      </div>

      <div class='all'>
        <div class='image-container' >
          <img src={aarambh} class='port-image'/>
            <div class="middle">
              <div>
                <h4>Aarambh TSI</h4>
              </div>
               <div class="text">
                 <a href="https://aarambh.surge.sh/" target="_blank">Visit</a>
               </div>
              </div>
        </div>

        <div class='image-container' >
          <img src={todo} class='port-image'/>
            <div class="middle">
              <div>
                <h4>Todo List</h4>
              </div>
               <div class="text">
                 <a href="https://sctodo.surge.sh" target="_blank">Visit</a>
               </div>
              </div>
        </div>

        <div class='image-container' >
          <img src={homie} class='port-image'/>
            <div class="middle">
              <div>
                <h4>Homie</h4>
              </div>
               <div class="text">
                 <a href="https://reactassignment.surge.sh/" target="_blank">Visit</a>
               </div>
              </div>
        </div>
      </div>

    </div>
    )
  }
}

export default All;
