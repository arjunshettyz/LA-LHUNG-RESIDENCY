import React from 'react';
import { ArrowDown, Compass } from 'lucide-react';
import heroImage from '../assets/hero_mountain_view.png';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="hero" 
      style={{ 
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.25) 85%, var(--bg-primary) 100%), url(${heroImage})` 
      }}
    >
      <div className="hero-container">
        <div className="hero-badge fade-in">
          <Compass className="hero-badge-icon float-animation" />
          <span>LUXURY MOUNTAIN ESCAPE</span>
        </div>
        
        <h1 className="hero-title fade-in">
          Where Mountain Dreams Meet <br />
          <span className="hero-title-accent">Alpine Luxury</span>
        </h1>
        
        <p className="hero-description fade-in">
          Discover <strong>LA-LHUNG RESIDENCY</strong>, a sanctuary of tranquility surrounded by breathtaking peaks. Cozy wooden interiors, around-the-clock hot water, high-speed internet, and private balconies offering sweeping vistas of the Himalayas.
        </p>
        
        <div className="hero-buttons fade-in">
          <a href="#booking" className="btn-gold">
            Book Your Stay
          </a>
          <a href="#rooms" className="btn-outline">
            View Room Plans
          </a>
        </div>
      </div>
      
      <a href="#amenities" className="hero-scroll-down" aria-label="Scroll to amenities">
        <span className="scroll-text">Explore Residency</span>
        <ArrowDown className="scroll-icon float-animation" />
      </a>
    </section>
  );
};

export default Hero;
