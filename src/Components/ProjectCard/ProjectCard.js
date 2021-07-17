import react from 'react'
import {Container, Row, Col, Image, Card, Button} from "react-bootstrap";
import "./ProjectCard.css"

function ProjectCard({img, github, deployed, name, description}){
    console.log(img);

    const openGithub = (e) => {
        e.preventDefault();
        console.log(github);
        window.open(github);
    }
    const openDeployed = (e) => {
        e.preventDefault();
        console.log(deployed);
        window.open(deployed);
    }
    return (
        <Card className="card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img}/>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            <Button className="cardButton" variant="primary" onClick={openGithub}>Github Repo</Button>
            <Button className="cardButton" variant="primary" onClick={openDeployed}>Deployed App</Button>
        </Card.Body>
        </Card>
    )
}


export default ProjectCard;