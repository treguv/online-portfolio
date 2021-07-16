import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects'

import {Container, Row, Col, Image, Nav} from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Container fluid > 
      {/* Navbar */}
        <Row fluid>
          <Col className="px-0" fluid>
            <NavBar></NavBar>
          </Col>
        </Row>
        {/* home page body */}
        <Row>
          <Col fluid>
            <Home></Home>
          </Col>
        </Row>
        <Row>
          <Projects></Projects>
        </Row>
      </Container>

    </div>
  );
}

export default App;
