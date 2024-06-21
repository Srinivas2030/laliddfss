import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <img className="hero-image" src="/try.jpg" alt="Hero background" />
      <div className="hero-content">
        <h1>Welcome to SJ Migrations</h1>
        <p>Your journey starts here</p>
      </div>
    </section>
  );
};

export default Hero;
