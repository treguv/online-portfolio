import react from 'react'
import {Container, Row, Col, Image} from "react-bootstrap";
import "./Home.css";

function Home() {
    return (
        <Container className="">
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
        </Container>
    )
}

//https://lh3.googleusercontent.com/proxy/WWaKXr1HPYm_Lw6XXlgjEDsj-Z7vvLv2MEnPJeHvYlW66otWdiKjdjZfYLgBpWZz_7OiRqRnRdbCwJmjuXySD35yrfpxYH1ZZeriegxLgL3_GC1qe6cT9D1RDFxZovc3KJ63efTX
export default Home;
