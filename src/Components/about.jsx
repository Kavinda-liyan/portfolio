import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import '../css/about.css';
import MyPhoto from '../assets/MyPhoto.png';
import Button from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin,faWhatsapp,faGithub,faDribbble } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, } from "@fortawesome/free-regular-svg-icons";
import { faPhone,faDownload } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";




function About(){
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])

    const downloadPDF = () => {
        
        const pdfUrl = 'https://drive.google.com/file/d/1LBta8-1w59Oamd6gZwmAr6AplE-fSia1/view?usp=sharing';
        window.open(pdfUrl, '_blank');
      };
    return(
       <Container>
       
            
                <Row className="AboutCardcontainer">
                    
                        <Col lg={5} className="cvContainer " >
                            <div className="AboutPhoto">
                            <img src={MyPhoto}></img>
                            <Link className="CV" to={"https://drive.google.com/file/d/1LBta8-1w59Oamd6gZwmAr6AplE-fSia1/view?usp=sharing"} target="_blank"> </Link>
                           

                            </div>
                            
                        </Col>
                        <Col lg={1} className="aboutLine1"  >
                        </Col>
                        <Col lg={6} className="cvTextContainer"  >
                            <h3>A.L.A.C Kavinda Liyanarachchi </h3>
                            <p><Link to='javascript:void(0)'
      onClick={() => window.location = 'chamarakavinda@hotmail.com'}><FontAwesomeIcon icon={faEnvelope}/> Chamarakavinda@hotmail.com </Link> </p>
                            <p><FontAwesomeIcon icon={faPhone} /> 0774421707</p>
                            <p><Link to={"https://www.linkedin.com/in/kavinda-liyanaarachchi-729b14262/"} target="_blank"><FontAwesomeIcon icon={faLinkedin}/> Kavinda Liyanaarchchci</Link></p>
                            <p><Link to={"https://github.com/Kavinda-liyan"} target="_blank"><FontAwesomeIcon icon={faGithub}/>Kavinda Liyanaarachchi </Link></p>
                            <p><Link to={"https://dribbble.com/Liyanaarchchi"} target="_blank"> <FontAwesomeIcon icon={faDribbble} />Kavinda</Link> </p>
                            <hr></hr>
                            <p>I've recently completed a <span className="StrongText">Higher National Diploma in Information Technology</span> at the Advanced Technological Institute in Dehiwala. 
                                I also recently concluded a six-month internship at<br></br> <span className="StrongText">"I-context(Pvt)Ltd"</span> as a UI/UX Engineer.
                                 My experiences have ignited a deep passion for both web development and graphic design.</p>

                            <p className="CvbtnContainer"  onClick={downloadPDF}><Link className="CvBtn"><FontAwesomeIcon icon={faDownload}/> CV </Link> </p>


                       </Col>
                    
                
           
        </Row>

       </Container>

        
    );
}

export default About;