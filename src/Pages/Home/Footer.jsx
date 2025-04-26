import React from "react";
import { FaTelegramPlane, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Eyerus. All rights reserved.</p>

        <div className="footer-links">
          <a href="#HeroSection">Home</a>
          <a href="#About">About</a>
          <a href="#Project">Project</a>
          <a href="#ContactMe">Contact</a>
        </div>

        <div className="footer-socials">
          <a
            href="https://t.me/@Hil34T"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://instagram.com/jerry teke"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/jerry23130"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
