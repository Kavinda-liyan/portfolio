import React, { useEffect } from "react";
import { Row,Col,Container } from "react-bootstrap";
import detailedphoto from '../assets/detailedphoto.jpg';
import '../css/homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from "aos";
import 'aos/dist/aos.css';

function Homepage(){

    useEffect(()=>{
        Aos.init({duration:2000});
    },[])

    return(
<Container >
    <Row>
        <Col lg={5} sm={12} className="detailedPhoto" >
            <div className="imageDiv ">
                <img alt="DetailedPhoto" src={detailedphoto}></img>
            </div>
            

        </Col>
        <Col lg={1} className="line"></Col>
        <Col lg={6} className="HeaderText" >
            <div className="HeaderContainer">
            <h1 className="Header1Name">Hi, I'm Kavinda <span className="Header1Littletext">Liyanaarachchi</span></h1>
            <h4 className="Header2">UI/UX ENGINEER</h4>
            <p>I have good experience as an UI/UX engineer.
Moreover, I'm familier with front-end frameworks (React js) and extra CSS, SASS,Bootsrap,Matirial UI and Tailwindcss knowledge. </p>

            <Row>
                <Col className="phillcard" lg={12}>
                    <div className="Phill">
                        <h6>Figma Designer</h6>
                    </div>
                    <div className="Phill">
                        <h6>Front-End Developer</h6>
                    </div>
                    <div className="Phill">
                        <h6>Graphic Designer</h6>
                    </div>
                    <div className="Phill">
                        <h6>Content Creator</h6>
                    </div>
                </Col>
            </Row>
            </div>
           

        </Col>
    </Row>


</Container>
    );
}

export default Homepage;