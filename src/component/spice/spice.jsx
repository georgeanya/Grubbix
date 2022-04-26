import React from 'react'
import './spice.css'
import wedding from '../../assets/wedding.jpg'
import birthday from '../../assets/birthday.jpg'
import family from '../../assets/family.jpg'
import training from '../../assets/training.jpg'
import outdoor from '../../assets/outdoor.jpg'
import holiday from '../../assets/holiday.jpg'

const Spice = () => {
  return (
    <div className='occasion'>
      <h1 className='occasion_text'>Spice Up Your Occasions</h1>
      <div className='spice'>
        <div className='spice_card'>
            <img src={training} alt='' className='spice_image'/>
            <div className='middle'>
            <p className='spice_text'> Training Schools </p>
            </div>
        </div>
        <div className='spice_card'>
            <img src={family} alt='' className='spice_image'/>
            <div className='middle'>
            <p className='spice_text'> Family Get-Together </p>
            </div>
        </div>
        <div className='spice_card'>
            <img src={birthday} alt='' className='spice_image'/>
            <div className='middle'>
            <p className='spice_text'> Birthday parties </p>
            </div>
        </div>
        <div className='spice_card'>
            <img src={outdoor} alt='' className='spice_image'/>
            <div className='middle'>
            <p className='spice_text'> Outdoor Parties </p>
            </div>
        </div>
        <div className='spice_card'>
            <img src={wedding} alt='' className='spice_image'/>
            <div className='middle'>
            <p className='spice_text'> Wedding Parties </p>
            </div>
        </div>
        <div className='spice_card'>
            <img src={holiday} alt='' className='spice_image'/>
            <div className='middle'>
            <p className='spice_text'> Holiday Celebrations </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Spice
