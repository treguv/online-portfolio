import react from "react";
import { Container, Nav, Navbar, Form, FormControl, Button,NavDropdown } from "react-bootstrap";
import "./NavBar.css"
function NavBar({expand}) {
  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto" expand={expand}>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#aboutme">About Me</Nav.Link>
      <Nav.Link href="#projects"> Projects</Nav.Link>
      <Nav.Link href="#contact"> Contact Me</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar;

/**
 *     <Navbar sticky="top" bg="dark" variant="dark" >
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Projects</Nav.Link>
            <Nav.Link href="#pricing">About&nbsp;Me</Nav.Link>
        </Nav>
    </Navbar>
  );
 */