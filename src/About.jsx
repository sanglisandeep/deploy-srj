import React from 'react';
import web from '../src/img/gold4.jpg';
import Common from './Common';

const About = () => {
  return(
    <>
      <div>
        <Common name="welcome to About Page" 
        imgsrc={web}
         visit="/contact"
         btname="Contact now"/>
      </div>
    </>
  );
};

export default About;