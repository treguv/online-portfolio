import react from 'react'
import {Container, Row, Col, Image} from "react-bootstrap";
import "./Home.css";

function Home() {
    return (
        <div>
            <Row className="align-items-center">
                <Col sm={12} lg={6}>
                    <Image src="https://i.graphicmama.com/blog/wp-content/uploads/2016/12/06083212/gravity_drib2.gif" fluid></Image>
                    {/* <Image fluid src ="https://lh3.googleusercontent.com/proxy/WWaKXr1HPYm_Lw6XXlgjEDsj-Z7vvLv2MEnPJeHvYlW66otWdiKjdjZfYLgBpWZz_7OiRqRnRdbCwJmjuXySD35yrfpxYH1ZZeriegxLgL3_GC1qe6cT9D1RDFxZovc3KJ63efTX" ></Image> */}
                </Col>
                <Col sm={12} lg = {6}>
                    <div className = "intro-text">
                        <h1 className="bold-text">Welcome to my portfolio!</h1>
                        <br></br>
                        
                    </div>
                    
                </Col>
            </Row>
            <Row>
                <Col sm={12} className ="about-me" >
                    <h1 className="bottom-border">About Me</h1>
                    <h3 className="about-me">Hi! My Name is Vlad!</h3>
                    <h5>I am a soon to be graduating Computer Science student 
                    with interests in Full Stack Development both in making Web Apps and Native Applications</h5>
                    <br></br>
                    <h5>Over my time as both a student and developer I have been able to work as a Full Stack Devloper
                        Intern with Digbi Health, finish a bootcamp studying MERN stack deveopment, and worki in many 
                        teams to complete large Full-Stack projects. This has all helped me along my journey to pursuing my dream career
                        as a Software Engineer.
                    </h5>
                    <br></br>
                    <h5>Below you can find what I am currently working on as well as some of my major projects. If you would like to help
                        get in contact please find my LinkedIn profile as well as my Email.
                    </h5>
                </Col>
            </Row>

            <Row>
                <Col sm={12} className ="about-me" >
                    <h1 className="bottom-border"> Projects</h1>
                </Col>
            </Row>
        </div>
    )
}

//https://lh3.googleusercontent.com/proxy/WWaKXr1HPYm_Lw6XXlgjEDsj-Z7vvLv2MEnPJeHvYlW66otWdiKjdjZfYLgBpWZz_7OiRqRnRdbCwJmjuXySD35yrfpxYH1ZZeriegxLgL3_GC1qe6cT9D1RDFxZovc3KJ63efTX
export default Home;
