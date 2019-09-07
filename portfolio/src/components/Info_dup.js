import React from 'react'
import PropTypes from 'prop-types'
import '../css/Info_Dup.css'
import AOS from 'aos'

const Info_dup = (props) => {
  AOS.init();
  return (
    <div class='Infos' data-aos="zoom-out-right">
      <div class='Portfolios'>
        <p class='his'>Hi, I'm</p>
        <p class='names'>SHUBHAM CHAUHAN</p>
        <p class='Desigs'>Frontend Developer</p>
      </div>
      <div class='social-nav'>
        <table class='socials'>
          <tr>
          <td><a href='https://github.com/shubham860' target='_blank'><ion-icon name="logo-github" class='logo'></ion-icon></a></td>
          <td><a href='https://www.linkedin.com/in/shubham-chauhan-5a1821153/' target='_blank'><ion-icon name="logo-linkedin" class='logo'></ion-icon></a></td>
          <td><a href='https://www.facebook.com/shubham.chauhan.583671/' target='_blank'><ion-icon name="logo-facebook" class='logo'></ion-icon></a></td>
          <td><a href='https://twitter.com/chauhan860' target='_blank'><ion-icon name="logo-twitter" class='logo'></ion-icon></a></td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Info_dup
