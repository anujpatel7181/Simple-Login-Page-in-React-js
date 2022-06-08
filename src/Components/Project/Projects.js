import React from "react";
import Footer from "../Footer";
import HeroImage2 from "../HeroImages/HeroImage2";
import Navbar from "../Navbar";
import PricingCard from "./PricingCard";
import Work from "./Work";

const Project = () => {
  return (
    <>
      <Navbar />
      <HeroImage2 heading="PROJECTS." text="Some of my most recent works." />
      <Work />
      <PricingCard />
      <Footer />
    </>
  );
};

export default Project;
