import "./HeroImage.css";
import React from "react";
import IntroImg from "./assets/intro-bg.jpg";
// import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={IntroImg} alt="abc" className="intro-img" />
      </div>
      <div className="content">
        <p>HI I'M A FRONT-END.</p>
        <h1>React Developer</h1>
        <div>
          <a href="/project" className="btn">
            Projects
          </a>
          <a href="/contact" className="btn btn-ligth">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
