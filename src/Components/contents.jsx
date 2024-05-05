import React from "react";
import NavBar from "./navbar";
import Homepage from "./homepage";
import About from "./about";
import { Container } from "react-bootstrap";
import '../css/content.css';

function NewContents(){
    return(
        <Container>
            <div id="home" className="section">
        <Homepage></Homepage>
    
    </div>
    <div id="about" className="section">
    <About></About>
    
    </div>
    <div id="skills" className="section">
       
    
    </div>
    <div id="projects" className="section">
        <h1>Hello world</h1>
    
    </div>
       
        </Container>
        
    );
}

export default NewContents;