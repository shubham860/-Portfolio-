import React from 'react'
import PropTypes from 'prop-types'
import '../css/Portfolio.css'
import mnist from '../images/mnist.png'
import election from '../images/election.jpg'
import movie from '../images/movie.jpeg'
import usa from '../images/usa.png'
import review1 from '../images/a_review.png'
import spam from '../images/spam.png'
import ipl from '../images/ipl.png'
import cetpa from '../images/cetpa.png'
import twitter from '../images/twitter.jpg'

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
                <h4>Lok-sabha Election 2019</h4>
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
                <h4>Movie Recommendation System</h4>
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
          <img src={spam} class='port-image'/>
            <div class="middle">
              <div>
                <h4>Spam Ham Classifier</h4>
              </div>
               <div class="text">
                 <a href='https://github.com/shubham860' target='_blank'><ion-icon name="logo-github" class='logo'></ion-icon></a>
               </div>
              </div>
        </div>
      </div>

      <div class='all'>
        <div class='image-container' >
          <img src={ipl} class='port-image'/>
            <div class="middle">
              <div>
                <h4>IPL Statistics</h4>
              </div>
               <div class="text">
                 <a href='https://github.com/shubham860' target='_blank'><ion-icon name="logo-github" class='logo'></ion-icon></a>
               </div>
              </div>
        </div>

        <div class='image-container' >
          <img src={cetpa} class='port-image'/>
            <div class="middle">
              <div>
                <h4>CETPA Reviews Classifier</h4>
              </div>
               <div class="text">
                 <a href='https://github.com/shubham860' target='_blank'><ion-icon name="logo-github" class='logo'></ion-icon></a>
               </div>
              </div>
        </div>

        <div class='image-container' >
          <img src={twitter} class='port-image'/>
            <div class="middle">
              <div>
                <h4>NLP on tweets</h4>
              </div>
               <div class="text">
                 <a href='https://github.com/shubham860' target='_blank'><ion-icon name="logo-github" class='logo'></ion-icon></a>
               </div>
              </div>
        </div>

      </div>

    </div>
    )
  }
}

export default Ml;
