import react from "react";
import { Container, Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import "./NavBar.css"
function NavBar() {
  return(
    <Navbar  bg="dark" variant="dark" className="" >
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Projects</Nav.Link>
            <Nav.Link href="#pricing">About&nbsp;Me</Nav.Link>
        </Nav>
    </Navbar>
  );
}

export default NavBar;
