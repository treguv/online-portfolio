import react from "react";
import { Container, Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import "./NavBar.css"
function NavBar() {
  return(
    <Navbar sticky="top" bg="dark" variant="dark" >
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Projects</Nav.Link>
            <Nav.Link href="#pricing">About&nbsp;Me</Nav.Link>
        </Nav>
    </Navbar>
  );
}

export default NavBar;
