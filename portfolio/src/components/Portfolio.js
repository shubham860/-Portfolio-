import React from 'react'
import PropTypes from 'prop-types'
import Info_dup from '../components/Info_dup'
import Nav from '../components/Nav'
import Frontend from '../components/Frontend'
import All from '../components/All'
import Ml from '../components/Ml'
import '../css/Portfolio.css'

class Portfolio extends React.Component {
  constructor(){
    super()
    this.state = {
      all : true,
      frontend  : false,
      ml : false
    }
  }

  all = () => {
      this.setState({
        all : true,
        frontend : false,
        ml : false
      })
  }


    frontend = () => {
        this.setState({
          all : false,
          frontend : true,
          ml : false
        })
    }


    ml = () => {
        this.setState({
          all : false,
          frontend : false,
          ml : true
        })
    }

  render () {
    const {all,ml,frontend} = this.state
    return(
        <div class='Portfolio-container'>
          <div class='infos'>
            <Info_dup/>
          </div>
          <div class='skills'>
            <Nav/>
              <div class='start'>
                <div class='about-head'>
                  <p class='chead'>PORTFOLIO</p>
                </div>

                <div class='filters'>
                  <ul class='nav-links2'>
                    <li><p class='nav-c'>Filters : </p></li>
                    <li><a onClick={this.all} class='pointer'><p class='nav-b'>All</p></a></li>
                    <li><a onClick={this.frontend} class='pointer'><p class='nav-b'>Frontend</p></a></li>
                    <li><a onClick={this.ml} class='pointer'><p class='nav-b'>Machine Learning</p></a></li>
                  </ul>
                </div>
                <div class='main-pills'>
                  {
                    all && <All/>
                  }
                  {
                    frontend && <Frontend/>
                  }
                  {
                    ml && <Ml/>
                  }
                </div>
              </div>
          </div>
        </div>
    )
  }
}

export default Portfolio;
