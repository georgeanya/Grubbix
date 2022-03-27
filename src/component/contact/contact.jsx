import React from 'react'
import './contact.css'
import logo3 from '../../assets/logo3.png'
import Location from '../location/location'


const Contact = () => {
  return (
    <div className='location' id='contact'>
      <h2 className='location_header'>Location</h2>
      <p></p>
        <div class="row contact" >
          <div class="col-6 location_text">
            <Location/>
          </div>
          <div class="col location_img">
            <img src={logo3} alt='header logo'/>
          </div>
        </div>
    </div>
  )
}

export default Contact
