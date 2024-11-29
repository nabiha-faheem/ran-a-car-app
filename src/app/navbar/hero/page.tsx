
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Left side - Text */}
      <div className="hero-text">
        <h2 className="hero-title">Drive Your Journey With Confidence</h2>
        <h3 className="hero-subtitle">Book The Car Now</h3>
        <button className="cta-btn">Explore Now</button>
      </div>

      {/* Right side - Car Image */}
      <div className="hero-image">
        <Image
          src="/media/istockphoto-185325883-612x612.jpg"
          alt="Car Image"
          height={800}
          width={599}
          className="image"
        />
      </div>
    </div>
  );
};

export default Hero;
