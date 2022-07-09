import React from "react";
import PortfolioPic from "../../assets/portfolio-mock.jpg";

function Hero() {
  return (
    <div>
      <div className="card">
        <div className="polaroid">
          <img src={PortfolioPic} alt="Picture of Karly Weatherstein"></img>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Hero;
