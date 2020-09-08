import React from 'react';
import web from '../src/img/gold2.jpg';

import Common from './Common';

const Home = () => {
  return(
    <>
      <Common name="We Provide Best Design and Best Quality"
        brand_name="Sri Raghavendra Jewellers" 
        imgsrc={web}
         visit="/services"
         btname="Get Started"/>
    </>
  );
};

export default Home;