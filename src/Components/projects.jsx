import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../css/projects.css';
import CarouselSlider from "./carousels/carouselslider";
import WM1 from '../assets/project1wm/wm1.png';
import WM2 from '../assets/project1wm/wm2.png';
import WM3 from '../assets/project1wm/wm3.png';
import CTC1 from '../assets/project2ctc/ctc1.png';
import CTC2 from '../assets/project2ctc/ctc2.png';
import CTC3 from '../assets/project2ctc/ctc3.png';

function Projects(){
    return(
        <Container className="projectsContainer">
            <h3>Projects</h3>
            <Container>
                <Row>
                    <Col lg={6}>
                    <CarouselSlider img1={WM1} Caption="Weather For You" dis1="First ReactJs Project" 
                    img2={WM2} dis2="Crate using OpenWeatherMap API"
                    img3={WM3} dis3="Crate using OpenWeatherMap API" />
                    </Col>
                    <Col lg={6}>
                    <CarouselSlider img1={CTC1} Caption="Crystal Tech Computer" dis1="Academic Group project (HND)" 
                    img2={CTC2} dis2="Project Front-end created by using html,css,js and bootstrap"
                    img3={CTC3} dis3="Backend develped by using PHP and use sql as database" />
                    </Col>
                    </Row>
                    <Row>
                    <Col lg={4}>
                    <CarouselSlider/>
                    </Col>
                    </Row>
                   
                
            </Container>
            
        </Container>
    );
}

export default Projects;