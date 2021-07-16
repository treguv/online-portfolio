import react from 'react'
import {Container, Row, Col, Image, Card, Button} from "react-bootstrap";
import ProjectCard from "../ProjectCard/ProjectCard"
function Projects() {
    return (
        <Row>
        <Col>
          <ProjectCard
           img = "../../img/SuperHeroSmash.gif"
           name="SuperHero Smash"
           description="This project provided a platform for users to vote for the strongest superhero and have disussions about their choices.
           "
           github="https://github.com/melissabarrerafarias/superherosmash"
           deployed="https://superherosmash.herokuapp.com/"></ProjectCard>
        </Col>

        <Col>
          <ProjectCard
           img = "../../img/SuperHeroSmash.gif"
           name="stuckInside"
           description="The purpose of this project was to provide a no-filter social 
           media platform for users to share their daily life in quarantine.
           "
           github="https://github.com/treguv/stuckInside"
           deployed="http://www.stuckinside.tech/"></ProjectCard>
        </Col>

        <Col>
          <ProjectCard
           img = "../../img/SuperHeroSmash.gif"
           name="Fly High"
           description="This project provided a platform for users to vote for the strongest superhero and have disussions about their choices.
           "
           github="https://github.com/treguv/fly-high"
           deployed="https://treguv.github.io/fly-high/"></ProjectCard>
        </Col>

        <Col>
          <ProjectCard
           img = "../../img/SuperHeroSmash.gif"
           name="DubHacks 2020"
           description="The purpose of this project was to provide an easier way for teachers to see 
           their students anotations in one place and in a way that provided useful information.
           "
           github="https://github.com/treguv/dubhacks2020"
           deployed="https://superherosmash.herokuapp.com/"></ProjectCard>
        </Col>
        
        <Col>
          <ProjectCard
           img = "../../img/SuperHeroSmash.gif"
           name="Note Taker"
           description="The purpose of this project was to provide an online platform to take notes and manage them on the web.
           "
           github="https://github.com/treguv/note-taker"
           deployed="https://superherosmash.herokuapp.com/"></ProjectCard>
        </Col>

        <Col>
          <ProjectCard
           img = "../../img/SuperHeroSmash.gif"
           name="Weather Dashboard"
           description="The purpose of this project was to provide an easier way for teachers to see 
           their students anotations in one place and in a way that provided useful information.
           "
           github="https://github.com/treguv/weather-dashboard"
           deployed="https://treguv.github.io/weather-dashboard/"></ProjectCard>
        </Col>
      </Row>
    )
}

export default Projects;