import React from 'react'
import { useState, useEffect } from 'react'
import Clock from './Clock'
import style from '../style/Nav.css'

const Navbar = () => {
return (
    <div className='Nav-bar'>
      <div className='Nav-left'>
        <a id='banner-link' href='https://www.minyongkim.com/'><p id='banner'>MINYONGKIM.COM</p></a>
      </div>

      <div className='Nav-right'>
        <div className='nav-icons'>
              <a id='email' href='mailto:min.y.kim0226@gmail.com'><img src='email.svg' alt=''></img></a>
              <img id='phone' src='phone.svg' alt='' onClick={() => {
                alert("Phone Number: 571-992-3010")
              }}></img>
              <img id='wifi' src='wifi.svg' alt=''></img>
        </div>

        <div>
          <Clock></Clock>
        </div>

      </div>
    </div>
  )
}

export default Navbar;
