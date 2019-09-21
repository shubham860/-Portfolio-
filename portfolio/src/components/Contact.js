import React from 'react'
import PropTypes from 'prop-types'
import Info_dup from '../components/Info_dup'
import Nav from '../components/Nav'
import '../css/Contact.css'

class Contact extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      name : '',
      email : '',
      text : '',
    };
    this.refhandler = React.createRef();
  }

  handler1 = (event) => {
      this.setState({
        [event.target.name] : event.target.value
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

  componentDidMount(){
    this.refhandler.current.focus();
  }

  submit = () => {
   const { name,email,text} = this.state;

   (name=='' | email =='' | text=='' ) ? alert(`Enter all inputs properly`) : alert(`Name : ${name}\nEmail : ${email}\nMessage : {text}`)

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
                    <input type='text' class='ip' name='name' value={name} onChange={this.handler1} placeholder="Name*" autoComplete='OFF' ref={this.refhandler}/><br/>
                    <input type='email' class='ip' value={email} onChange={this.handler2} placeholder="Email*"  /><br/>
                    <textarea value={text} class='tb' onChange={this.handler3} placeholder="Your Message*" ></textarea><br/>
                    <button type='button' class='btn' onClick={this.submit}>SEND MESSAGE</button>
                  </div>

                  <div class='address'>
                    <div class='add'>
                      <div>
                        <ion-icon name="pin" class='icons'></ion-icon>
                      </div>
                      <div>
                        <p class='a'>Location</p>
                        <p class='b'>Moradabad</p>
                      </div>
                    </div>

                    <div class='add'>
                      <div>
                        <ion-icon name="call" class='icons'></ion-icon>
                      </div>
                      <div>
                        <p class='e'>Call</p>
                        <p class='b'><a href="tel:+918791555171" class='tel'>+918791555171 </a></p>
                      </div>
                    </div>

                    <div class='add'>
                      <div>
                        <ion-icon name="mail" class='icons'></ion-icon>
                      </div>
                      <div>
                        <p class='f'>Enquiries</p>
                        <p class='b'><a href="mailto: shubham.chauhan860@gmail.com" class='tel'>shubham.chauhan860@gmail.com </a></p>
                      </div>
                    </div>

                  </div>

                  </div>
                </div>
              </div>
          </div>

    )
  }
}

export default Contact;
