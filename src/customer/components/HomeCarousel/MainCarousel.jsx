import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCaroselData } from './MainCaroselData.js';

const MainCarousel = () => {
 
const items = mainCaroselData.map((item) => {
    console.log(item); // To check if items are correctly loaded
    return <img className='cursor-pointer' role='presentation' src={item.image} alt="" />;
  });
  

  return (
    <>
      <h4>hello</h4>
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
      />
    </>
  );
};

export default MainCarousel;