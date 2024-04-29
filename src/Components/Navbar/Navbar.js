import React, { useState } from 'react';
import './Navbar.css';
import logo from './../../logo.svg';

function Navbar({ scrollToSection }) {
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
                    <li><button onClick={() => scrollToSection('home')}>HOME</button></li>
                    <li><button onClick={() => scrollToSection('capitain')}>CAPITAIN</button></li>
                    <li><button onClick={() => scrollToSection('joueur')}>JOUEUR</button></li>
                    <li><button onClick={() => scrollToSection('stade')}>STADE</button></li>
                    <li><button onClick={() => scrollToSection('contact')}>CONTACT</button></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
