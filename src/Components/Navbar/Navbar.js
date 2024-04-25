import React, { useState } from 'react';
import './Navbar.css';
import logo from './../../logo.svg';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='first-container'>
            <div className='logo-and-menu-container'>
            <button className='menu-button' onClick={toggleMenu}>
                    &#9776; {/* Unicode character for hamburger icon */}
                </button>
                <div className='logo-container'>
                    <img src={logo} alt='logo' className='logo' />
                    <p className='logo-text'>KickOff</p>
                </div>
                
            </div>
            <nav className={isOpen ? 'nav active' : 'nav'}>
                <ul className='buttons'>
                    <li><button onClick={toggleMenu}>HOME</button></li>
                    <li><button onClick={toggleMenu}>ABOUT</button></li>
                    <li><button onClick={toggleMenu}>SERVICES</button></li>
                    <li><button onClick={toggleMenu}>CONTACT</button></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;