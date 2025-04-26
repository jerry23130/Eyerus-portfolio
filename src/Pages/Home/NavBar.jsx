import React, { useState, useEffect } from "react";

function NavBar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={`nav ${navActive ? "active" : ""}`}>
      <div
        className={`nav-hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav_hamburger_line"></span>
        <span className="nav_hamburger_line"></span>
        <span className="nav_hamburger_line"></span>
      </div>

      <div className={`navbar-item ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <button
              onClick={() => {
                closeMenu();
                handleScrollToSection("HeroSection");
              }}
              className="navbar-content"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                closeMenu();
                handleScrollToSection("About");
              }}
              className="navbar-content"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                closeMenu();
                handleScrollToSection("Project");
              }}
              className="navbar-content"
            >
              My Portfolio
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                closeMenu();
                handleScrollToSection("Testimonials");
              }}
              className="navbar-content"
            >
              Testimonials
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                closeMenu();
                handleScrollToSection("Contact");
              }}
              className="btn btn-outline-primary"
            >
              Contact Me
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
