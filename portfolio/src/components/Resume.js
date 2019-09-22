import React from 'react'
import PropTypes from 'prop-types'
import Info_dup from '../components/Info_dup'
import Nav from '../components/Nav'
import '../css/Resume.css'
import {Bar} from 'react-chartjs-2'

class Resume extends React.Component {
  constructor(props){
   super(props)
   this.state = {
     chartData:{
       labels: ['ReactJs','Html','CSS','Bootstrap','JavaScript','JQuery','Python','Django','Machine Learning','Java','C','SQL'],
       datasets:[
         {
           label:'Skills',
           data: [70,90,80,90,70,60,70,40,70,60,70,50],
           backgroundColor:'#04C2C9'
         }
       ]
     }
   }
  }

  render () {
    return(
        <div class='Resume-container'>
          <div class='infos'>
            <Info_dup/>
          </div>
          <div class='skills'>
            <Nav/>
            <div class='main-container'>
              <div class='about-head'>
                <p class='chead'>RESUME</p>
              </div>

              <div class='intro'>
                <p class='intro-lines'>I'm a <span class='work'>Frontend Developer &  Machine Learning enthusiast</span> from Moradabad, UP. I aim to make a difference through my creative solution.</p>
              </div>

              <div class='about-intro'>
                <div class='lines'>
                  <p class='options-details'><span class='options'>Name :  </span> Shubham Chauhan</p>
                  <p class='options-details'><span class='options'>Date of birth :  </span> September 28, 1997</p>
                </div>

                <div class='lines'>
                  <p class='options-details'><span class='options'>Address :  </span> Street no. 2 Line Par majhola, Moradabad</p>
                  <p class='options-details'><span class='options'>Email :  </span> <a href='mailto: shubham.chauhan860@gmail.com' class='tel'>Shubham.chauhan860@gmail.com</a></p>
                </div>

                <div class='lines'>
                  <p class='options-details'><span class='options'>Mobile no :  </span> <a href='tel:+918791555171' class='tel'>+918791555171</a></p>
                  <p class='options-details'><span class='options'>Skype :  </span> Shubham860</p>
                </div>

                <div class='about-head' style={{marginTop : "40px"}}>
                  <p class='chead'>SKILLS</p>
                </div>
                <div class='skill'>
                  <Bar
                    data={this.state.chartData}
                    options={{
                      title:{
                        display: 'bhaiya',
                      },
                      legend:{
                        display: true,
                        position: 'right'
                      },
                      scales: {
                          xAxes: [{
                              gridLines: {
                                  drawOnChartArea: false
                              },
                              ticks: {
                                  maxRotation: 50,
                                  minRotation: 50
                              }
                          }],
                          yAxes: [{
                              gridLines: {
                                  drawOnChartArea: false
                              },
                              ticks: {
                                  suggestedMin: 10,
                                  suggestedMax: 100
                              }
                          }]
                      }
                    }}
                  />
                </div>

                <div class='about-head'>
                  <p class='chead'>Education</p>
                </div>
                <div class='education'>
                  <div class='btech'>
                    <p class='deg-name'>Moradabad Institute of Technology(AKTU),Moradabad</p>
                    <p class='degree'>B.TECH (CS&E) , 2016 -2020</p>
                    <p class='degree'>Aggregate : 83.2%</p>
                  </div>

                  <div class='inter'>
                    <p class='deg-name'>VKS Public School (CBSE),Moradabad</p>
                    <p class='degree'>SENIOR SECONDARY (XII) ,2016</p>
                    <p class='degree'>Percentage: 72</p>
                  </div>

                  <div class='Highschool'>
                    <p class='deg-name'>VKS Public School (CBSE),Moradabad</p>
                    <p class='degree'>SECONDARY (X) ,2014</p>
                    <p class='degree'>CGPA: 9.4</p>
                  </div>
                </div>


                <div class='about-head' style={{marginTop : "40px"}}>
                  <p class='chead'>EXPERIENCE</p>
                </div>
                <div class='education'>
                  <div class='btech'>
                    <p class='deg-name'>CETPA Infotech Pvt. Ltd</p>
                    <p class='degree'>Machine Learning Intern</p>
                    <p class='degree'>JUNE 2019- JULY 2019</p>
                  </div>

                  <div class='inter'>
                    <p class='deg-name'>Across the globe(ATG)</p>
                    <p class='degree'>Web Developer Intern</p>
                    <p class='degree'>APRIL 2019- JUNE 2019</p>
                  </div>

                  <div class='Highschool'>
                    <p class='deg-name'>EngiLife</p>
                    <p class='degree'>Web Developer Intern</p>
                    <p class='degree'>NOVEMBER 2018 - JANUARY 2019</p>
                  </div>
                </div>

                <div class='about-head' style={{marginTop : "40px"}}>
                  <p class='chead'>ACHIEVEMENTS</p>
                </div>
                <div class='education'>
                  <div class='btech'>
                    <p class='achi-name'>1. Secured 1st Position in AKTU Zonal Level Coding Contest</p>
                  </div>

                  <div class='inter'>
                    <p class='ach-name'>2. Secured 1st Position in AKTU State Level Coding Contest</p>
                  </div>

                  <div class='Highschool'>
                    <p class='ach-name'>3. Selected for the Grand Finale of Smart India Hackathon 2019</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
    )
  }
}
export default Resume;
