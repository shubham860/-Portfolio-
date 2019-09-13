import React from 'react'
import PropTypes from 'prop-types'
import Info_dup from '../components/Info_dup'
import Nav from '../components/Nav'
import '../css/Contact.css'

class Contact extends React.Component {
  
  constructor(){
    super()
    this.state= {
      name : '',
      email : '',
      text : ''
    }
  }

  handler1 = (event) => {
      this.setState({
        name : event.target.value
      })
  }

  handler2 = (event) => {
      this.setState({
        email : event.target.value
      })
  }

  handler3 = (event) => {
      this.setState({
        text : event.target.value
      })
  }

  submit = () => {
    alert(` Name : ${this.state.name}`)
  }

  render () {
    const {name,email,text} = this.state
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

                <div class='form'>
                  <div class='inputs'>
                    <input type='text' class='ip' value={name} onChange={this.handler1} /><br/>
                    <input type='email' class='ip' value={email} onChange={this.handler2}  /><br/>
                    <textarea value={text} onChange={this.handler3} ></textarea><br/>
                    <button type='button' onClick={this.submit}>Submit</button>
                  </div>
                  <div class='address'>
                    <h1>hello</h1>
                  </div>
                </div>
              </div>
          </div>
        </div>
    )
  }
}

export default Contact;
