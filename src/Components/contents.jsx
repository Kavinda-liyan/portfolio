import React from "react";
import NavBar from "./navbar";
import Homepage from "./homepage";
import About from "./about";
import Skills from "./skills";
import { Container } from "react-bootstrap";
import '../css/content.css';
import Projects from "./projects";

function NewContents(){
    return(
        <Container>
            <div id="home" className="section">
        <Homepage/>
    
    </div>
    <div id="about" className="section">
    <About/>
    
    </div>
    <div id="skills" className="section">
        <Skills/>
       
    
    </div>
    <div id="projects" className="section">
        <Projects/>
    
    </div>
       
        </Container>
        
    );
}

export default NewContents;