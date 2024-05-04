import React from "react";
import NavBar from "./navbar";
import Homepage from "./homepage";
import { Container } from "react-bootstrap";
import '../css/content.css';

function NewContents(){
    return(
        <Container>
            <div id="home" className="section">
        <Homepage></Homepage>
    
    </div>
    <div id="about" className="section">
        <h1>Hello world</h1>
    
    </div>
    <div id="skills" className="section">
        <h1>Hello world</h1>
    
    </div>
    <div id="projects" className="section">
        <h1>Hello world</h1>
    
    </div>
       
        </Container>
        
    );
}

export default NewContents;