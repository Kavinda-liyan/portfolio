import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../css/footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance, faDribbble, faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";


function Footer({ isDarkMode }){
    return(
<Container className="footerContainer">
    <Row className="logofooter">
        <Col lg={2}>
            <Link to={"https://www.linkedin.com/in/kavinda-liyanaarachchi-729b14262/"} target="_blank"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> </Link>

        </Col>
        <Col lg={2}>
        <Link to={"https://github.com/Kavinda-liyan"} target="_blank"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> </Link>
            </Col>
            <Col lg={2}>
            <Link to={"https://dribbble.com/Liyanaarchchi"} target="_blank"><FontAwesomeIcon icon={faDribbble}></FontAwesomeIcon> </Link>
            
            </Col>
            <Col lg={2}>
            <Link ><FontAwesomeIcon icon={faBehance}></FontAwesomeIcon> </Link>
            
            </Col>
            <Col lg={2}>
            <Link to={"https://www.facebook.com/kavinda.chamara.14"} target="_blank"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> </Link>
            
            </Col>

    </Row>
    <h6>Portfolio.Kavinda</h6>

</Container>
    );
}

export default Footer;