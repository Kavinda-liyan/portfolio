import React from "react";
import { Container,Row } from "react-bootstrap";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";

function NavBar(){
const scrollSection =(id)=>{
    const section =document.getElementById(id);
    if(section){
        section.scrollIntoView({behavior:'smooth'});
    }
}

    return(
<nav>
    <Container>
        
        <div className="navbar">
            <ul>
                <li  onClick={()=>scrollSection('home')}>Home</li>
                <li onClick={()=>scrollSection('about')}>About</li>
                <li onClick={()=>scrollSection('skills')}>Skills</li>
                <li onClick={()=>scrollSection('projects')}>Projects</li>

            </ul>
        </div>
        
        
    </Container>


</nav>
    );
}

export default NavBar;