import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../css/skills.css';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import { faDatabase, faEdit, faPhotoFilm, faServer, faTools, faVideo } from "@fortawesome/free-solid-svg-icons";
import { faCss3,faHtml5,faSass,faJs, faReact, faBootstrap, faJava, faPhp, faStackExchange, faAngular, faFigma } from "@fortawesome/free-brands-svg-icons";
import SkillComp from "./skills/skillComponent";
import { faFileCode } from "@fortawesome/free-solid-svg-icons/faFileCode";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Skills(){

  useEffect(()=>{
    Aos.init({duration:2000});
},[]);

    const [frontendCollapsed, setIsFrontendCollapsed] = useState(true);
    const [backendCollapsed, setIsBackendCollapsed] = useState(true);
    const [databaseCollapsed,setIsDatabaseCollapsed]=useState(true);
    const [toolCollapsed,SetIsToolCollapsed]=useState(true);

    const toggleFrontend = () => {
        setIsFrontendCollapsed(!frontendCollapsed);
        setIsBackendCollapsed(true); 
        setIsDatabaseCollapsed(true);
        SetIsToolCollapsed(true);
       
    };

    const toggleBackend = () => {
        setIsBackendCollapsed(!backendCollapsed);
        setIsFrontendCollapsed(true); 
        setIsDatabaseCollapsed(true);
        SetIsToolCollapsed(true);
        
    };

    const toggleDatabase = () =>{
        setIsDatabaseCollapsed(!databaseCollapsed);
        SetIsToolCollapsed(true);
        setIsBackendCollapsed(true); 
        setIsFrontendCollapsed(true); 
        
    }
    const toggleTool = () =>{
        SetIsToolCollapsed(!toolCollapsed);
        setIsDatabaseCollapsed(true);
        setIsBackendCollapsed(true); 
        setIsFrontendCollapsed(true); 
        
    }
    return(
<Container className="SkillsContainer" >
    <h3> Skills</h3>
    <Row >
        <Col lg={6} >
           <Container className="topic">
            <h4 onClick={toggleFrontend}><FontAwesomeIcon icon={faCode}/> Front-end</h4>
            
            <Container>
            
      {!frontendCollapsed && (
        <div className={`Frontendcontainer ${frontendCollapsed ? 'collapse' : 'Expand'}`}>
            
          {/* Content of the collapsible div */}
          <SkillComp className="html" icon={faHtml5} skilltitle="HTML"/>
            <SkillComp className="css" icon={faCss3} skilltitle="CSS"/>
            <SkillComp className="sass" icon={faSass} skilltitle="SASS"/>
            <SkillComp className="js" icon={faJs} skilltitle="Java Script"/>
            <hr></hr>
            <SkillComp className="react" icon={faReact} skilltitle="React JS"/>
            <SkillComp className="angular" icon={faAngular} skilltitle="Angular"/>
            <SkillComp className="bs" icon={faBootstrap} skilltitle="Bootstrap"/>
            <SkillComp className="tw" icon={faFileCode} skilltitle="Tailwind CSS"/>
            <SkillComp className="mui" icon={faFileCode} skilltitle="Material UI"/>
            
          
        </div>
      )}
            </Container>

            <hr/>

           </Container>
           <Container className="topic">
            
            <h4 onClick={toggleBackend}><FontAwesomeIcon icon={faServer}/>  Programming</h4>
            
            <Container>
            {!backendCollapsed && (
        <div className={`Backendcontainer ${backendCollapsed ? 'collapse' : 'Expand'}`}>
            
          {/* Content of the collapsible div */}
          <SkillComp className="java" icon={faJava} skilltitle="JAVA"/>
            <SkillComp className="php" icon={faPhp} skilltitle="PHP"/>
           

          
        </div>
      )}
            </Container>
            <hr/>
            
           </Container>
           
        </Col>
        
        <Col lg={6} >
        <Container className="topic">
            <h4 onClick={toggleDatabase}><FontAwesomeIcon icon={faStackExchange}/>  Database</h4>
            <Container>

            
            {!databaseCollapsed &&(
                <div className={`DatabaseContainer ${databaseCollapsed ? 'collapse' : 'Expand'}`}>
            
                {/* Content of the collapsible div */}
                <SkillComp className="sql" icon={faDatabase} skilltitle="SQL"/>
                  
                 
      
                
              </div>
            )}
            </Container>
            <hr/>
           </Container>

           <Container className="topic">
            <h4 onClick={toggleTool}><FontAwesomeIcon icon={faTools}/> Tools</h4>
            <Container>

            
            {!toolCollapsed &&(
                <div className={`ToolContainer ${toolCollapsed ? 'collapse' : 'Expand'}`}>
            
                {/* Content of the collapsible div */}
                <SkillComp className="figma" icon={faFigma} skilltitle="Figma"/>
                <SkillComp className="xd" icon={faEdit} skilltitle="Adobe XD"/>
                <hr/>
                <SkillComp className="ps" icon={faPhotoFilm} skilltitle="Adobe Photoshop"/>
                <SkillComp className="ai" icon={faPhotoFilm} skilltitle="Adobe Illustrator"/>
                <SkillComp className="pp" icon={faVideo} skilltitle="Adobe PremierPro"/>
                <SkillComp className="ae" icon={faVideo} skilltitle="Adobe AfterEffect"/>
                <SkillComp className="dr" icon={faVideo} skilltitle="Davici Reslove "/>
                  
                 
      
                
              </div>
            )}
            </Container>
            <hr/>
           </Container>
          
        </Col>
    </Row>
</Container>
    );
}

export default Skills;