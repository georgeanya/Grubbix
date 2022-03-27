import React from 'react'
import './menu.css'


const Menu = () => {
  return (
    <div className='menu' id='menu'>
      <h1>Print Menus</h1>
      <p >Our chef has been cooking for more than 16 years using the best meats and vegetables made fresh to order everyday and cooked with 100% vegetable oil</p>
      <div className='menu_button'>
      <button type='button' className='btn btn-lg btn-dark'>Menu</button>
      <button type='button' className='btn btn-lg btn-dark'>Order Now</button>
      </div>
    </div>
  )
}

export default Menu
