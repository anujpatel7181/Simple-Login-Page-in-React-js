import React, { useRef } from "react";
import "./Form.css";
import emailjs from "emailjs-com";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_08225n3",
        "template_lfjwmqe",
        form.current,
        "0qC_AkjGik00B7NU7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="name" required></input>
        <label>Email</label>
        <input type="email" name="email" required></input>
        <label>Subject</label>
        <input type="text" name="subject"></input>
        <label>Message</label>
        <textarea
          rows="6"
          name="message"
          placeholder="Type Your Text Here"
          required
        />
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;
