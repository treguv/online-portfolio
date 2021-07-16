import react from 'react'
import {Container, Row, Col, Image, Card, Button} from "react-bootstrap";
import "./ProjectCard.css"
let githubURL = "";
let deployedURL = "";
function ProjectCard(props){
    console.log(props.img);
    githubURL = props.github;
    deployedURL = props.deployed;
    return (
        <Card className="card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.img}/>
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
                {props.description}
            </Card.Text>
            <Button className="cardButton" variant="primary" onClick={openGithub}>Github Repo</Button>
            <Button className="cardButton" variant="primary" onClick={openDeployed}>Deployed App</Button>
        </Card.Body>
        </Card>
    )
}

function openGithub(e){
    e.preventDefault();
    console.log(githubURL);
    window.open(githubURL);
}
function openDeployed(e){
    e.preventDefault();
    console.log(deployedURL);
    window.open(deployedURL);
}
export default ProjectCard;