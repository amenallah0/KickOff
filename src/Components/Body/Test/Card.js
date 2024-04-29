import React from 'react'
import Carousel from './Carousel'
import tarton from '../../../images/dimensions.jpeg'
import tarton1 from '../../../images/tarton1.jpg'
function Card() {
    const images = [
        tarton,
        tarton1
        // Add more image URLs here
      ];
  return (
    <div className='all'>
       <div style={{padding: "10px"}}>
        <Carousel images={images} />
      </div>
    </div>
  )
}

export default Card
