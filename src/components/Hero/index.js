import React from "react";
import PortfolioPic from "../../assets/portfolio-mock.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero">
      <div className="polaroid">
        <img src={PortfolioPic} alt="Karly Weatherstein"></img>
      </div>

      <div className="heroText">
        <h1 className="titleFonts">Karly Weatherstein</h1>
        <p className="paragraphFonts">Software Developer</p>
        <Link to="/about" className="aboutButton paragraphFonts">
          About Me! →
        </Link>
      </div>
    </div>
  );
}

export default Hero;
