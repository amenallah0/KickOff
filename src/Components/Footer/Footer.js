import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='footer'>
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
