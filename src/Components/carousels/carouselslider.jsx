import { Container } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";


function CarouselSlider(props){
    return(
        <Container>
          <h5>{props.Caption}</h5>
          <p><Link to={props.project} > Project Link</Link></p>
            <Carousel data-bs-theme="dark">
      <Carousel.Item>
      
          
      
        <img
          className="d-block w-100 "
          src={props.img1}
          alt={props.alt1}
          height="250px"
        />
        <p>{props.dis1}</p>
        
      </Carousel.Item>
      <Carousel.Item>
      
          
        <img
          className="d-block w-100"
          src={props.img2}
          alt={props.alt2}
          height="250px"
        />
        <p>{props.dis2}</p>
      </Carousel.Item>
      <Carousel.Item>
     
          
        <img
          className="d-block w-100"
          src={props.img3}
          alt={props.alt3}
          height="250px"
        />
        <p>
          {props.dis3}
          </p>
        
         
        
      </Carousel.Item>
    </Carousel>

        </Container>
    );
}

export default CarouselSlider;