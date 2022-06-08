import "./HeroImage.css";
import React from "react";
import IntroImg from "../assets/intro-bg.jpg";
import { BrowserRouter, Link } from "react-router-dom";
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
          <BrowserRouter>
            <Link to="/project" className="btn">
              Projects
            </Link>
            <Link to="/contact" className="btn btn-ligth">
              Contact
            </Link>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
