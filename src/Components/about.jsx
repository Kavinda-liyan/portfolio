import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import '../css/about.css';
import MyPhoto from '../assets/MyPhoto.png';
import Button from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About(){
    return(
       <Container>
       
            
                <Row className="AboutCardcontainer">
                    
                        <Col lg={5} className="cvContainer">
                            <div className="AboutPhoto">
                            <img src={MyPhoto}></img>
                            <Link className="CV" to={"https://drive.google.com/file/d/13X_Ek-uO2LcIyF2kDxMf-Vd-J22Qtd60/view?usp=sharing"} target="_blank"> <FontAwesomeIcon icon="fa-solid fa-download" /></Link>
                           

                            </div>
                            
                        </Col>
                        <Col lg={1} className="aboutLine1">
                        </Col>
                        <Col>
                       </Col>
                    
                
           
        </Row>

       </Container>

        
    );
}

export default About;