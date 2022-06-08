import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={25} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>1, Vishat Villa,</p>
              <p>Nr.Kalhaar bunglows, Shilaj,</p>
              <p>Ahmedabad-Gujarat, India.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={25}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 95861 17507
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={25}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              anujpatel7181@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me.</h4>
          <p>
            This is me Anuj Patel. I enjoy discussing new projects and design
            challenges .
          </p>
          <div className="social">
            <FaFacebook
              size={35}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaInstagram
              size={35}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={35}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={35}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
