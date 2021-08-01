import react from "react";
import { Container, Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import "./Footer.css"
function Footer() {
  //set up open links for contact me
  const openLinkedIn = () => {
    console.log("openning linkedin");
    window.open("https://www.linkedin.com/in/vladislav-tregubov/");
  }

  const openEmail = () => {
    console.log("openning linkedin");
    window.open("mailto:treguv@uw.edu");
  }

  const openGithub = () => {
    console.log("openning linkedin");
    window.open("https://github.com/");
  }
  return(
    <Navbar sticky="bottom" bg="dark" variant="dark" >
        <Navbar.Brand href="#home">Contact Me </Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#email" onSelect = {() => {openEmail()}}>Email</Nav.Link>
            <Nav.Link href="#linkedin" onSelect = {() => {openLinkedIn()}}>LinkedIn</Nav.Link>
            <Nav.Link href="#github" onSelect = {() => {openGithub()}}>GitHub</Nav.Link>
        </Nav>
    </Navbar>
  );
}

export default Footer;
