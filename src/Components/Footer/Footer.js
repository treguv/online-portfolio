import react from "react";
import { Container, Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import "./Footer.css"
function Footer() {
  return(
    <Navbar sticky="top" bg="dark" variant="dark" >
        <Navbar.Brand href="#home">Contact Me </Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#home">Email</Nav.Link>
            <Nav.Link href="#features">LinkedIn</Nav.Link>
            <Nav.Link href="#pricing">GitHub</Nav.Link>
        </Nav>
    </Navbar>
  );
}

export default Footer;
