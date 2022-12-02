import React, { useState } from "react";
import { Card, Stack, Modal, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Data from "./data";
import data from "./data";

function Projects() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [projects, setProjects] = useState(data);

  const projectsArray = projects.map((project) => {
    return (
      <div class="col-md-4 hoverable mt-5">
        <a href={project.url}>
          <Card style={{ width: "18rem" }}>
            <div>
              <img
                alt="Card image"
                class="card-image"
                src={require(`../../assets/project-img/${project.img}`)}
                key="N-Sense"
              />
            </div>
            <Card.Body>
              <Card.Title className="border-b-2 border-white">
                {project.name}
              </Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <a href={project.github}>
                <Card.Text>Github Repo</Card.Text>
              </a>
            </Card.Body>
          </Card>
        </a>
      </div>
    );
  });

  return (
    <Container class="container d-flex align-items-center projects-container">
      <Row class="row projects-row">{projectsArray}</Row>
    </Container>
  );
}

export default Projects;
