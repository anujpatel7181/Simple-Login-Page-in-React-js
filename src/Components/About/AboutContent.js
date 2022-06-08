import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./AboutContent.css";
import React1 from "../assets/React1.jpeg";
import React2 from "../assets/react2.webp";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          Im a react font-end developer. I create responsive secure websites for
          my clients.
        </p>
        <BrowserRouter>
          <Link to="/contact">
            <button className="btn"> Contact</button>
          </Link>
        </BrowserRouter>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} alt="abc" className="img" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} alt="abc" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
