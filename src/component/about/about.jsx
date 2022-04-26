import React from 'react'
import logo1 from '../../assets/logo1.png'
import './about.css'

const About = () => {
  return (
    <div class="row about" id='about'>
      <div class="col about_img">
        <img src={logo1} alt='header logo'/>
      </div>
      <div class="col-7 about_text">
        <h1>Our Story</h1>
        <p>The Company was incorporated on September 8th, 2008 in Lagos, Nigeria.</p>
        <p>The Company presently has a staff strength of 30 permanent staff and over 20 casual staff that can conveniently handle 2,000 -guest event.v</p>
        <p>Some of our clients are Shell Nigeria, MTN Nigeria, First Bank PLC, First Academy, Polaris Bank Training school, Heritage Bank Training school, Keystone Bank Training school, UBA PLC, Wema Bank PLC, Corona Schools, School Kids, Multichoice Nigeria, Max International, Lagos State Ministry of Education.</p>
      </div>
    </div>

  )}

export default About
