import React from "react";
import "./Capitain.css";
import screenImage from "./../../Images/screenImage.png";

function Capitain() {
  return (
    <div className="second-screen">
      <div className="loading-screen">
        <img src={screenImage} alt="captain" className="screen-image" />
      </div>
      <div className="content">
        <h1 className="title">Concept Capitain</h1>
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
      </div>
    </div>
  );
}

export default Capitain;
