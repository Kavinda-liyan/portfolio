import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


function CarouselSlider(props){
    return(
        <Container >
         <Link to={props.project} target="_blank" className="projectlinks"> <div className="ProjectCard">
           <img
          className="d-block w-100 projectImages"
          src={props.img1}
          alt={props.alt1}
          height="150px"
        />
        <h5><FontAwesomeIcon icon={props.Picon}/>{props.Caption}</h5>
        
        <p className="projectDescription">{props.dis1}</p>
          </div></Link>
          
          

        </Container>
    );
}

export default CarouselSlider;