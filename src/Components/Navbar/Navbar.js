import React from 'react';
import './Navbar.css';
import logo from './../../logo.svg'

function Navbar() {
  return (
    <div className='first-container'>
        <div className='logo-container'>
            <img src={logo} alt='logo' className='logo' />
            <p className='logo-text'>KickOff</p>
        </div>
        <nav>
            <ul className='Bouttons'>
                <li><button className='buttons'>HOME</button></li>
                <li><button className='buttons'>ABOUT</button></li>
                <li><button className='buttons'>SERVICES</button></li>
                <li><button className='buttons'>CONTACT</button></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;
