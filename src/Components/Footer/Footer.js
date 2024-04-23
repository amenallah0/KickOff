import React, { useEffect, useState } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      const footer = document.querySelector('.footer');
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top + window.scrollY;
        const windowHeight = window.innerHeight;
        setIsVisible(scrollY + windowHeight >= footerTop);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`footer ${isVisible ? 'visible' : ''}`}>
        <ul>
            <li> Merci Pour Votre Confiance</li>
            <li> Merci Pour Choisir KickOff</li>
            <li> Pour nous contacter, Applez nous sur </li>
            <li> 197197197 </li>
        </ul>
        <div className='social-icons'>
          <a href='lien-vers-votre-page-facebook' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faFacebook} size='2x' />
          </a>
          <a href='lien-vers-votre-page-instagram' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faInstagram} size='2x' />
          </a>
          <a href='lien-vers-votre-page-youtube' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faYoutube} size='2x' />
          </a>
        </div>
    </div>
  );
}

export default Footer;
