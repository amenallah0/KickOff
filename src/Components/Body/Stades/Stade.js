import React, { useState, useEffect, useRef, useContext } from "react";
import tarton1 from "../../../images/tarton1.jpg";
import "./Stade.css"; // Import your CSS file
import CarouselItem from "./Carouselitem";

const Stade = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Recruter votre tarton",
      description: "Pour recruter votre tarton et faciliter les réservations pour vos invités, il est essentiel d'inclure les détails de localisation du tarton. En fournissant l'adresse exacte ou les coordonnées, les invités peuvent facilement se rendre à l'endroit où se trouve le tarton. De plus, inclure des repères ou des indications pertinentes peut encore simplifier le processus de réservation, garantissant une expérience fluide pour tous les participants.",
      buttonLabel: "S'inscrire maintenant",
      imageSrc: tarton1,
    },
    {
      title: "Recruter votre tarton",
      description: "Pour recruter votre tarton et faciliter les réservations pour vos invités, il est essentiel d'inclure les détails de localisation du tarton. En fournissant l'adresse exacte ou les coordonnées, les invités peuvent facilement se rendre à l'endroit où se trouve le tarton. De plus, inclure des repères ou des indications pertinentes peut encore simplifier le processus de réservation, garantissant une expérience fluide pour tous les participants.",
      buttonLabel: "S'inscrire maintenant",
      imageSrc: tarton1,
    },
    {
      title: "Recruter votre tarton",
      description: "Pour recruter votre tarton et faciliter les réservations pour vos invités, il est essentiel d'inclure les détails de localisation du tarton. En fournissant l'adresse exacte ou les coordonnées, les invités peuvent facilement se rendre à l'endroit où se trouve le tarton. De plus, inclure des repères ou des indications pertinentes peut encore simplifier le processus de réservation, garantissant une expérience fluide pour tous les participants.",
      buttonLabel: "S'inscrire maintenant",
      imageSrc: tarton1,
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Update every 3 seconds

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);
  let indexer=1;
  return (
    <div ref={sliderRef} className="carousel sliding-slider-component" id="Slide">
      <div className="inner" style={{ transform: `translate(-${activeIndex * 100}%)` }}>
        {items.map((item) => (
          <CarouselItem
            item={item}
            width={"90%"}
            indexer={(indexer++)%2==0?1:2}
          />
        ))}
      </div>
    </div>
  );
};

export default Stade;


