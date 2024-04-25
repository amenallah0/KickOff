import React from 'react';
import Stade from './Stades/Stade';
import Joueur from './Joueurs/Joueur';
import Capitain from './Joueurs/Capitain';
import Splach from './Joueurs/Splach';
import './Body.css'; 

function Body() {
    return (
        <div> 
            <Splach />
            <Capitain />
        </div>
    );
}

export default Body;
