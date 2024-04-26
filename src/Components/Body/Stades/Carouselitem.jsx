import React from "react";

const CarouselItem = ({ item, width, indexer }) => {
  let message
  indexer==2?message='container2':message='container';
  return (
    <div className="carousel-item" style={{ width: width }}>
      {indexer==2?(<div className='container'>
        <div className="imageContainer">
        <img className="carousel-img" src={item.imageSrc} />
        </div>
        <div className="carousel-item-text">{item.description}</div>   
      </div>):(<div className='container'>
        <div className="carousel-item-text">{item.description}</div>  
        <div className="imageContainer">
        <img className="carousel-img" src={item.imageSrc} />
        </div> 
      </div>)}      
    </div>
  );
};

export default CarouselItem;