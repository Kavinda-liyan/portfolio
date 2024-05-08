import React from "react";
import { Row,Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SkillComp(props){
    return(
<Row className={props.className} id="logo">
            <Col lg={5}>
                <h5><FontAwesomeIcon icon={props.icon}/> <span className="skilltxt">{props.skilltitle}</span> </h5>
            </Col>
            <Col lg={7} className="barContainer">
                <div className="progressbar">
                    <div className="level"></div>
                </div>
            </Col>
          </Row>
    );
}

export default SkillComp;