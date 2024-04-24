import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { List, ListItem, ListIcon } from '@chakra-ui/react';

import './Joueur.css';
import captain from './../../Images/captain.webp';
import joueur from './../../Images/joueur.jpg';
import stade from './../../Images/stade.jpg'


function Joueur() {
    const steps1 = [
        { text: 'Créer une équipe', paragraph: 'Le capitaine a le droit de créer une équipe' },
        { text: 'Modifier La Formation', paragraph: 'Le capitaine a le droit de modifier la formation de son équipe' },
        { text: 'Chercher Une Equipe', paragraph: 'Le capitaine peut rechercher une équipe pour jouer un match' },
        { text: 'Chercher un stade', paragraph: 'Le capitaine peut rechercher un stade pour organiser un match' }
    ];
    const steps2 = [
        { text: 'Rejoindre une équipe', paragraph: 'Le joueur a la possibilité de chercher des équipes, qui sont en manque des joueurs dans des certaines postes, et demander de les rejoindre' },
        { text: 'Chercher des Equipes qui sont en manque des joueurs', paragraph: 'Le capitaine peut rechercher une équipe pour jouer un match' },
    ];
    const steps3 = [
        { text: 'Choix de stade', paragraph: "Le joueur a la possibilité de chercher des stades dans une région spécifique"}];

    return (
        <div className='global-container'>
            <div className='joueur-container'>
                {/* Première section */}
                <div className='top-section'>
                    <img src={captain} alt='captain' className='images'></img>
                </div>
                <div className='carousel-container'>
                    <Carousel showArrows={false} showThumbs={false} showStatus={false} autoPlay interval={2000} infiniteLoop showIndicators={false}>
                        <div className='caption'>Concept Capitaine</div>
                        {steps1.map((step, index) => (
                            <div key={index}>
                                <List spacing={3}>
                                    <ListItem>
                                        <div>
                                            <p>{step.text}</p>
                                            <p>{step.paragraph}</p>
                                        </div>
                                    </ListItem>
                                </List>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>

            <div className='joueur-container'>
                {/* Deuxième section */}
                <div className='carousel-container'>

                    <Carousel showArrows={false} showThumbs={false} showStatus={false} autoPlay interval={2000} infiniteLoop showIndicators={false}>
                        <p className='caption'> Concept Joueur </p>
                        {steps2.map((step, index) => (
                            <div key={index}>
                                <List spacing={3}>
                                    <ListItem>
                                        <div>
                                            <p>{step.text}</p>
                                            <p>{step.paragraph}</p>
                                        </div>
                                    </ListItem>
                                </List>
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className='top-section'>
                    <img src={joueur} alt='joueurs' className='images'></img>
                </div>
                
            </div>
            <div className='joueur-container'>
                {/* Première section */}
                <div className='top-section'>
                    <img src={stade} alt='stade' className='images'></img>
                </div>
                <div className='carousel-container'>
                    <Carousel showArrows={false} showThumbs={false} showStatus={false} autoPlay interval={2000} infiniteLoop showIndicators={false}>
                        <div className='caption'>Réservation des stades</div>
                        {steps3.map((step, index) => (
                            <div key={index}>
                                <List spacing={3}>
                                    <ListItem>
                                        <div>
                                            <p>{step.text}</p>
                                            <p>{step.paragraph}</p>
                                        </div>
                                    </ListItem>
                                </List>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Joueur;
