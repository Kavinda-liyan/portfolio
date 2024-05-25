import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "../css/navbar.css";

function NavBar({ toggleTheme, isDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const scrollSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={isDarkMode ? 'dark' : 'light'}>
      <div className="navbarContainer">
        <div className="navbar">
          <button className="toggle-button" onClick={toggleNavbar}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <h1>KL.<span className="smalltext">portfolio</span></h1>
          <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
            <li onClick={() => scrollSection('home')}>Home</li>
            <li onClick={() => scrollSection('about')}>About</li>
            <li onClick={() => scrollSection('skills')}>Skills</li>
            <li onClick={() => scrollSection('projects')}>Projects</li>
          </ul>
          <button className="theme-toggle-button" onClick={toggleTheme}>
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
