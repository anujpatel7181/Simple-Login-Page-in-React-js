import React from "react";
import HeroImage2 from "../HeroImages/HeroImage2";
import Form from "./Form";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <HeroImage2 heading="CONTACT." text="Let's have a chat." />
      <Form />
      <Footer />
    </>
  );
};

export default Contact;
