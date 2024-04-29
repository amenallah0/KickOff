import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer" id='contact'> {/* Ensure that the ID matches the one used in Navbar */}
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Adeptes du football ? Découvrez notre application de réservation de match, 
            votre allié idéal pour organiser des rencontres palpitantes. 
            Notre Application simplifie le processus de réservation et de coordination, 
            vous permettant de vous concentrer sur l'essentiel !</p>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>Email: example@email.com</li>
            <li>Address: Monastir Tunisie</li>
            <li>Phone: +51076121</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Social Media</h4>
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon icon={faFacebookF} style={{ color: '#3b5998' }}/>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <FontAwesomeIcon icon={faInstagram} style={{ color: '#e1306c' ,marginLeft:'10px'}}/>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/">
                <FontAwesomeIcon icon={faYoutube} style={{ color: '#ff0000' ,marginLeft:'10px'}}/>
              </a>
            </li>
            
          </ul>
        </div>
      </div>

      <div className="footer-copyright">
        <p style={{textAlign:'center'}}>&copy; 2024 KickOff</p>
      </div>
    </footer>
  );
};

export default Footer;
