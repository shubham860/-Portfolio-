import React from 'react'
import PropTypes from 'prop-types'
import '../css/Portfolio.css'
import mnist from '../images/mnist.png'
import election from '../images/election.png'
import movie from '../images/movie.jpeg'
import usa from '../images/usa.png'
import review1 from '../images/a_review.png'

class Ml extends React.Component {
  render () {
    return(
      <div>
      <div class='all'>
        <div class='image-container' >
          <img src={mnist} class='port-image'/>
            <div class="middle">
              <div>
                <h4>Digit Recogniser</h4>
              </div>
               <div class="text">
                 <a href='https://github.com/shubham860' target='_blank'><ion-icon name="logo-github" class='logo'></ion-icon></a>
               </div>
              </div>
        </div>

        <div class='image-container' >
          <img src={election} class='port-image'/>
            <div class="middle">
              <div>
                <h4>Lok-sabha 2019</h4>
              </div>
               <div class="text">
                  <a href='https://github.com/shubham860' target='_blank'><ion-icon name="logo-github" class='logo'></ion-icon></a>
               </div>
              </div>
        </div>

        <div class='image-container' >
          <img src={movie} class='port-image'/>
            <div class="middle">
              <div>
                <h4>Movie Recommendation</h4>
              </div>
               <div class="text">
                <a href='https://github.com/shubham860' target='_blank'><ion-icon name="logo-github" class='logo'></ion-icon></a>
               </div>
              </div>
        </div>

      </div>

      <div class='all'>
        <div class='image-container' >
          <img src={usa} class='port-image'/>
            <div class="middle">
              <div>
                <h4>USA Military Bases</h4>
              </div>
               <div class="text">
                 <a href='https://github.com/shubham860' target='_blank'><ion-icon name="logo-github" class='logo'></ion-icon></a>
               </div>
              </div>
        </div>

        <div class='image-container' >
          <img src={review1} class='port-image'/>
            <div class="middle">
              <div>
                <h4>AT&T Reviews Classifier</h4>
              </div>
               <div class="text">
                 <a href='https://github.com/shubham860' target='_blank'><ion-icon name="logo-github" class='logo'></ion-icon></a>
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

export default Ml;
