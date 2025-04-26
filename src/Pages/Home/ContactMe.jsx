import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";

export default function ContactMe() {
  return (
    <section id="Contact" className="contact-section">
      <h2 className="section-heading">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-box">
            <FaPhoneAlt />
            <p>+251 946653145</p>
          </div>
          <div className="info-box">
            <FaEnvelope />
            <p>eyerustekto@gmail.com</p>
          </div>
          <div className="info-box">
            <FaInstagram />
            <a
              href="https://instagram.com/jerry"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jerry
            </a>
          </div>
          <div className="info-box">
            <FaTelegramPlane />
            <a
              href="https://t.me/@Hil34T"
              target="_blank"
              rel="noopener noreferrer"
            >
              Eyerus Tekto
            </a>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
