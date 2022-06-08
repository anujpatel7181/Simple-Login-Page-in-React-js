import React from "react";
import Footer from "../Footer";
import HeroImage2 from "../HeroImages/HeroImage2";
// import Navbar from "../Navbar";
import AboutContent from "./AboutContent";

function About() {
  return (
    <>
      {/* <Navbar /> */}
      <HeroImage2 heading="ABOUT." text="I'm a freindly Front-End Developer" />
      <AboutContent />
      <Footer />
    </>
  );
}

export default About;
