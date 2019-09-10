import React from 'react'
import PropTypes from 'prop-types'
import Info_dup from '../components/Info_dup'
import Nav from '../components/Nav'
import '../css/Contact.css'

class Contact extends React.Component {
  render () {
    return(
        <div class='contact-container'>
          <div class='infos'>
            <Info_dup/>
          </div>
          <div class='skills'>
            <Nav/>
              <div class='form-container'>

                <div class='about-head'>
                  <p class='chead'>GET IN TOUCH</p>
                </div>
              </div>
          </div>
        </div>
    )
  }
}

export default Contact;
