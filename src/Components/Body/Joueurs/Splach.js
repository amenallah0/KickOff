import React from "react";
import "./SplachD.css";
import screenImage from "./../../Images/screenImage.png";

function Splach() {
  return (
    <div className="first-screen">
      <div className="content">
        <h1 className="title">KickOff your sport life</h1>
        <div className="AboutUs">
          <p>
            Bienvenue dans notre application de réservation de match de
            football, votre compagnon ultime pour organiser des rencontres
            sportives passionnantes !
            amical ou un capitaine d'équipe désireux de planifier des matchs
            compétitifs, notre application simplifie le processus de réservation
            et de coordination.
          </p>
        </div>
        <div className="btnGroupe"  >
        <button className="btnHero"> 
        <img src="apple.png" alt="App Store" />
        <div className="textButton"> 
        <p className="small">Download on the</p>
          <p className="store">App store</p>
        </div>
         </button>
         <button className="btnHero"> 
         <img src="playstore.png" alt="Google Play" />
        <div className="textButton"> 
        <p className="small">Get on the</p>
          <p className="store">Google play</p>
        </div>
         </button>
        </div>
      </div>
      <div className="loading-screen">
        <img src={screenImage} alt="captain" className="screen-image"></img>
      </div>
    </div>
  );
}

export default Splach;
