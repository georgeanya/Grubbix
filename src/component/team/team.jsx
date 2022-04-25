import React from 'react'
import './team.css'
import icon from '../../assets/corporate-list-icon.png'

const Team = () => {
  return (
    <div class="container_">
      <h1>Our Team</h1>
      <ul>
        <li class="pdB_35">
          <div class="inner">
            <div class="image-block pdB-14">
              <img  src={icon} alt="" />
            </div>
            <p><b>Mrs. Bolade Morayo Adebayo</b></p>
            <p>Managing Director</p>
          </div>
        </li>
        <li class="pdB_35">
          <div class="inner">
            <div class="image-block pdB-14">
              <img src={icon} alt="" />
            </div>
            <p><b>Mr. Adekunle Adebayo</b></p>
            <p>Executive Director</p>
          </div>
        </li>
        <li class="pdB_35">
          <div class="inner">
            <div class="image-block pdB-14">
              <img src={icon} alt="" />
            </div>
            <p><b>Mr. Sunday Olaniyi</b></p>
            <p>Operations Coordinator</p>
          </div>
        </li>
        <li class="pdB_35">
          <div class="inner">
            <div class="image-block pdB-14">
              <img src={icon} alt="" />
            </div>
            <p><b>Mr. Olalekan Kayode</b></p>
            <p>Accounts Officer</p>
          </div>
        </li>
        <li class="pdB_35">
          <div class="inner">
            <div class="image-block pdB-14">
              <img src={icon} alt="" />
            </div>
            <p><b>Mr. Abayomi Fakoya</b></p>
            <p>Executive Chef</p>
          </div>
        </li>
      </ul>
	  </div>
  )
}

export default Team;
