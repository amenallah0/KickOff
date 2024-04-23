import React from 'react';
import Stade from './Stades/Stade';
import Joueur from './Joueurs/Joueur';
import './Body.css'; 

function Body() {
    return (
        <div> 
            <Joueur />
            <Stade />
        </div>
    );
}

export default Body;
