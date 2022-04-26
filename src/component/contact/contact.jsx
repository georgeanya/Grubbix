import React from 'react'
import './contact.css'
import logo3 from '../../assets/logo3.png'
import Location from '../location/location'


const Contact = () => {
  return (
    <div className='location' id='contact'>
      <h1 className='location_header'> Our Location</h1>
      <p className='location_header' >Our Grubbix based in Lagos, Nigeria</p>
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
