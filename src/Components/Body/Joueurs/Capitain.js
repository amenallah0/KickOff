import React from "react";
import "./Capitain.css";
import Captain from "./../../Images/captain.jpg";

function Capitain() {
  return (
    <div className="second-screen">
      <div className="loading-screen">
        <img src={Captain} alt="captain" className="captain-image" />
      </div>
      <div className="content">
        <h1 className="title">Concept Capitaine</h1>
        <div className="AboutUs">
          <p>
            Le rôle du capitaine est central dans l'organisation des activités
            de son équipe. Il peut créer et personnaliser l'équipe, inviter
            des membres, rechercher des adversaires pour des matchs, et
            réserver des terrains pour les rencontres. Ces fonctions permettent
            au capitaine de diriger et de coordonner efficacement son équipe
            pour des expériences sportives enrichissantes.
          </p>
        </div>
        <div className="btnGroupe">
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
    </div>
  );
}

export default Capitain;
