import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Styles du carrousel
import { List, ListItem, ListIcon } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md'; // Import des icônes depuis react-icons

import './Joueur.css';
import captain from './../../Images/captain.webp';
import joueur from './../../Images/joueur.jpg';


function Joueur() {
    const steps1 = [
        { icon: <MdCheckCircle color='green' />, text: 'Créer une équipe', paragraph: 'Le capitaine a le droit de créer une équipe' },
        { icon: <MdCheckCircle color='green' />, text: 'Modifier La Formation', paragraph: 'Le capitaine a le droit de modifier la formation de son équipe' },
        { icon: <MdCheckCircle color='green' />, text: 'Chercher Une Equipe', paragraph: 'Le capitaine peut rechercher une équipe pour jouer un match' },
        { icon: <MdCheckCircle color='green' />, text: 'Chercher un stade', paragraph: 'Le capitaine peut rechercher un stade pour organiser un match' }
    ];
    const steps2 = [
        { icon: <MdCheckCircle color='green' />, text: 'Rejoindre une équipe', paragraph: 'Le capitaine a le droit de créer une équipe' },
        { icon: <MdCheckCircle color='green' />, text: 'Chercher des Equipes qui sont en manque des joueurs', paragraph: 'Le capitaine peut rechercher une équipe pour jouer un match' },
    ];

    return (
        <div className='global-container'>
            <div className='joueur-container'>
                {/* Première section */}
                <div className='caption'>Concept Capitaine</div>
                <div className='top-section'>
                    <img src={captain} alt='captain' className='captain'></img>
                </div>
                <div className='carousel-container'>
                    <Carousel showArrows={false} showThumbs={false} showStatus={false} autoPlay interval={5000} infiniteLoop showIndicators={false}>
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

                    <Carousel showArrows={false} showThumbs={false} showStatus={false} autoPlay interval={5000} infiniteLoop showIndicators={false}>
                        <p className='caption2'> Concept Joueur </p>
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
                    <img src={joueur} alt='captain' className='captain'></img>
                </div>
            </div>
        </div>
    );
}

export default Joueur;
