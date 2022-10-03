import React, { useRef } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import { MdOutlineMail } from "react-icons/md";
import { SiFiverr } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs
      .sendForm(
        "service_hufq3yl",
        "template_teil4px",
        form.current,
        "FZ8IDTfRPoweQx_Rw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h1>Contact Me</h1>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineMail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>hamza23.js@gmail.com</h5>
            <a href="mailto:hamza23.js@gmail.com" target="_blanlk">
              Send a mesage
            </a>
          </article>
          <article className="contact-option">
            <SiFiverr className="contact-option-icon" />
            <h4>Fiverr</h4>
            <h5>hamzaa_js</h5>
            <a href="https://www.fiverr.com/share/9jDPPa" target="_blanlk">
              Send a mesage
            </a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className="contact-option-icon" />
            <h4>WhatsApp</h4>
            <h5>+923227136870</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+923227136870"
              target="_blanlk"
            >
              Send a mesage
            </a>
          </article>
        </div>
        {/* Form starts here */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
