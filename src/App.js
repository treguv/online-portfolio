import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer';

import {Container, Row, Col, Image, Nav} from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Container fluid className = "noPadding"> 
      {/* Navbar */}
        <Row fluid className="justify-content-md-center noPadding">
          <Col className="px-0 mx-0" >
            <NavBar expand="sm"></NavBar>
          </Col>
        </Row>
        {/* home page body */}
        <Row>
          <Col fluid>
            <Home></Home>
          </Col>
        </Row>
        <Row className="my-5 justify-content-md-center">
          <Projects></Projects>
        </Row>

        <Row fluid>
          <Col className="px-0" fluid>
            <Footer></Footer>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
