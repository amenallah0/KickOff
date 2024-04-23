import React from 'react'
import Stade from './Stades/Stade';
import Joueur from './Joueurs/Joueur';

function Body() {
  return (
    <div style={{minHeight:'520px'}}>Body
    <Joueur/>
    <Stade/>
    </div>
  )
}

export default Body;