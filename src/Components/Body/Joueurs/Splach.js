import React from "react";
import "./SplachD.css";
import screenImage from "./../../Images/screenImage.png";
import appStoreImage from "./../../Images/apple.png"; // Ensure path is correct
import playStoreImage from "./../../Images/playstore.png"; // Ensure path is correct

function Splach() {
  return (
    <div className="first-screen">
      <div className="content">
        <h1 className="title">KickOff your sport life</h1>
        <div className="about-us">
          <p>
            Bienvenue dans notre application de réservation de match de football,
            votre compagnon ultime pour organiser des rencontres sportives
            passionnantes ! Que vous soyez un joueur occasionnel amical ou un
            capitaine d'équipe désireux de planifier des matchs compétitifs,
            notre application simplifie le processus de réservation et de
            coordination.
          </p>
        </div>
        <div className="btn-group">
          <button className="btn-hero">
            <img src={appStoreImage} alt="App Store" />
            <div className="text-button">
              <p className="small">Download on the</p>
              <p className="store">App Store</p>
            </div>
          </button>
          <button className="btn-hero">
            <img src={playStoreImage} alt="Google Play" />
            <div className="text-button">
              <p className="small">Get on the</p>
              <p className="store">Google Play</p>
            </div>
          </button>
        </div>
      </div>
      <div className="loading-screen">
        <img src={screenImage} alt="captain" className="screen-image" />
      </div>
    </div>
  );
}

export default Splach;