import react from "react";
import { Container, Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import "./NavBar.css"
function NavBar() {
  return(
    <Container fluid className="noMargin noPadding">
    <Navbar bg="dark" variant="dark" className="noPadding noMargin" >
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Projects</Nav.Link>
            <Nav.Link href="#pricing">About&nbsp;Me</Nav.Link>
        </Nav>
    </Navbar>
    </Container>
  );
}

export default NavBar;
