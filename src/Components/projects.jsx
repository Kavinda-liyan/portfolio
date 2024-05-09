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
import MSC from '../assets/msc.png';
import SANASA from '../assets/sanasa.png';
import POPCORN from '../assets/popcorn.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faWebAwesome } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";



function Projects(){
    return(
        <Container className="projectsContainer">
            <h3>Projects</h3>
            <Container>
                <Row>
                    
                    <Col lg={4}>
                    <CarouselSlider Picon={faGithub} project="https://github.com/Kavinda-liyan/Project_1_2022.git" img1={CTC1} Caption="Crystal Tech Computer" 
                    dis1="Academic Group project (HND) This project is developed using HTML, CSS, JavaScript, and Bootstrap for the frontend, with PHP utilized for the backend. The backend interacts with a SQL database." 
                     />
                    </Col>
                    <Col lg={4}>
                    <CarouselSlider Picon={faGithub} project="https://github.com/Kavinda-liyan/MSCTechnologies.git" img1={MSC} Caption="MSC Technologies" 
                    dis1="Academic Individual project (HND) This project is developed using HTML, CSS, JavaScript, and Bootstrap for the frontend, with PHP utilized for the backend.
                     The backend interacts with a SQL database." />
                    </Col>
                    <Col lg={4}>
                    <CarouselSlider Picon={faGithub} project="https://github.com/Kavinda-liyan/test-wheather.git" img1={WM1} Caption="Weather For You"
                     dis1="This project is built using ReactJS for the frontend, with Bootstrap and CSS for styling
                     . It integrates the OpenWeatherMap API for weather data retrieval." 
                     />
                    </Col>
                    
                    </Row>
                    <Row>
                    <Col lg={4}>
                    <CarouselSlider Picon={faGithub} project="https://github.com/Kavinda-liyan/SanasaGodigamuwa_Project.git" img1={SANASA} Caption="Sanasa Godigamuwa Branch Portfolio" 
                    dis1="This is a simple static website developed using HTML, CSS, and Bootstrap. It serves as a portfolio for the Sanasa Godigamuwa Branch." />
                    </Col>
                    <Col lg={4}>
                    <CarouselSlider Picon={faGlobe} project="https://popcorn.lk/" img1={ POPCORN} Caption="Popcorn Cinema" 
                    dis1="This is our inaugural collaborative website created using WordPress.
                     It represents the combined efforts of our team and showcases our collective skills in web development and content management using the WordPress platform." />
                    </Col>
                    
                    </Row>

                    
                   
                
            </Container>
            
        </Container>
    );
}

export default Projects;