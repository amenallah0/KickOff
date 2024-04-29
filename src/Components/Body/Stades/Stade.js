import React from "react";
import "./Stade.css"; // Import your CSS file
import tarton from '../../../images/dimensions.jpeg'
import tarton1 from '../../../images/tarton1.jpg'

import Description from "../description/Description";
import Carousel from "./Carouselitem";

const Stade = () => {
  const images = [
    tarton,
    tarton1
    // Add more image URLs here
  ];
  return (
  
<div className='container' id="stade">
    <Carousel images={images} />
    <div className="carousel-item-text">
    <h1 className="title">Concept Stade</h1>
      Pour recruter votre tarton et faciliter les réservations pour vos invités, 
      il est essentiel d'inclure les détails de localisation du tarton. En fournissant l'adresse exacte ou les coordonnées, les invités peuvent facilement se rendre à l'endroit où se trouve le tarton. 
      De plus, inclure des repères ou des indications pertinentes peut encore simplifier le processus de réservation, garantissant une expérience fluide pour tous les participants.
      <Description/>
    </div>   
    
  </div>
  
    
  );
};

export default Stade;