import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';

import {Container, Row, Col, Image, Nav} from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Container fluid > 
      {/* Navbar */}
        <Row>
          <Col>
            <NavBar></NavBar>
          </Col>
        </Row>
        {/* home page body */}
        <Row>
          <Col>
            <Home></Home>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
