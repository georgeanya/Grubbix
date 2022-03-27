import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
      <div class="navbar navbar-expand-lg navbar-light   navbar">
        <a class="navbar_brand navbar-brand" id='top' >Grubbix </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse navbar_link" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link navbar_link_item" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link navbar_link_item" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link navbar_link_item" href="#menu">Menu</a>
            </li>
            <li class="nav-item">
              <a class="nav-link navbar_link_item" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
