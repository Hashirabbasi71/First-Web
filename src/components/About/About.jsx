import React from 'react';
import Slider from '../Slider/Slider';
import "./About.css"
const About = () => {
  return (
    <section id="about" className="about-section">
    <div className="about-section">
      <h1 className='about-heading'>About Component</h1>
      <Slider/>
    </div>
    </section>
  );
};

export default About;
