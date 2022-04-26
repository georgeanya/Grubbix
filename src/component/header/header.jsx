import React from 'react'
import logo2 from '../../assets/logo2.png'
import './header.css'

const Header = () => {
  return (
    <div class="row header_row header" id='home'>
      <div class="col-6 header_text">
        <h1>Grubbix Catering Service Limited</h1>
        <p>We are a culinary service provider with
            the vision to make corporate catering
            and events perfect, glamorous and
            successful at an affordable price.
        </p>
        <div className='menu_button'>
        <button type='button' className='btn btn-lg '>Menu</button>
        <button type='button' className='btn btn-lg '>Order Now</button>
        </div>
      </div>
      <div class="col header_img">
        <img src={logo2} alt='header logo'/>
      </div>
    </div>
  )
}

export default Header
