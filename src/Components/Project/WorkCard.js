import React from "react";
import "./WorkCard.css";

import { BrowserRouter, NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="abc" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <a href={props.view} className="btn">
            View
          </a>
          <BrowserRouter>
            <NavLink to="url.com" className="btn">
              Source
            </NavLink>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
