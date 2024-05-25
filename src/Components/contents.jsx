import React from "react";
import Homepage from "./homepage";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import { Container } from "react-bootstrap";
import '../css/content.css';

function NewContents({ isDarkMode }) {
  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <div id="home" className="section">
        <Homepage />
      </div>
      <div id="about" className="section">
        <About />
      </div>
      <div id="skills" className="section">
        <Skills />
      </div>
      <div id="projects" className="section">
        <Projects />
      </div>
    </div>
  );
}

export default NewContents;
