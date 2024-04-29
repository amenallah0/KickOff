import React from 'react';
import Stade from './Stades/Stade';
import Joueur from './Joueurs/Joueur';
import Capitain from './Joueurs/Capitain';
import Splach from './Joueurs/Splach';
import './Body.css'; 
import Description from './description/Description';
import Card from './Test/Card';
function Body() {
    return (
        <div> 
            <Splach />
            <Capitain />
            <Joueur />
            <Stade/>         
        </div>
    );
}

export default Body;
