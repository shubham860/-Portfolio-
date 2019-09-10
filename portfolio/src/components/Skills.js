import React from 'react'
import PropTypes from 'prop-types'
import Info_dup from '../components/Info_dup'
import Nav from '../components/Nav'
import '../css/Skills.css'
import dp from '../images/dp1.jpg'
import {Bar} from 'react-chartjs-2'

class Skills extends React.Component {
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
        <div class='skill-container'>
          <div class='infos'>
            <Info_dup/>
          </div>
          <div class='skills'>
            <Nav/>
          <div class='about-container'>

            <div class='about-head'>
              <p class='head'>ABOUT</p>
            </div>

            <div class='details-2'>
              <div class='photo'>
                <img src={dp} class='img'/>
              </div>
              <div class='info'>
                <p class='bio-head'>Who's this guy?</p>
                <p class='bio'>I'm the Front-End Developer and Machine Learning enthusiast I have serious passion for UI effects, animations, creating intuitive, dynamic user experiences, Data visualization and Data analysis.</p>
              </div>
            </div>

            <div class='details-1'>
              <div class='icon'>
                <ion-icon name="speedometer"></ion-icon>
                <p class='icon-head'>Fast</p>
                <p class='para'>Fast load times and lag free interaction, my highest priority.</p>
              </div>
              <div class='icon'>
                <ion-icon name="tablet-portrait"></ion-icon>
                <p class='icon-head1'>Responsive</p>
                <p class='para'>My layouts will work on any device, big or small.</p>
              </div>
              <div class='icon'>
                <ion-icon name="bulb"></ion-icon>
                <p class='icon-head2'>Intuitive</p>
                <p class='para'>Strong preference for easy to use, intuitive UX/UI.</p>
              </div>
              <div class='icon'>
                <ion-icon name="rocket"></ion-icon>
                <p class='icon-head2'>Dynamic</p>
                <p class='para'>Websites don't have to be static, I love making pages come to life.</p>
              </div>
            </div>


            <div class='details-3'>
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
            </div>

            </div>
            </div>
          </div>

    )
  }
}

export default Skills;
