import React, { useState } from "react";
import { Card, Stack, Modal, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Projects() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [projects] = useState([
    {
      name: "N-Sense",
      url: "https://n-sense.herokuapp.com/",
      description: "An ecommerce site selling handmade therapeutic products",
      technologies:
        "React, Apollo, GraphQL, Express.js, Mongoose, Tailwind, Stripe, AWS, Heroku",
    },
    {
      name: "Tenantive.ly",
      url: "https://glacial-temple-16968.herokuapp.com/",
      description:
        "A real estate management application providing rental listing and budget services to landlords",
      technologies:
        "HTML, CSS, JavaScript, Bootstrap, Handlebars.js, Node.js, mySQL2, AWS",
    },
    {
      name: "Day Planner",
      url: "https://chrisphailey.github.io/planner-challenge2/",
      description:
        "A simple and sleek day planner color coded to display tasks in the past, present and future",
      technologies: "HTML, CSS, JavaScript",
    },
    {
      name: "Budget-Tracker",
      url: "https://secret-harbor-25388.herokuapp.com/",
      description:
        "An everyday budget tracker for the everyday person.  No complex spreadsheets... just simple monitoring of daily transactions",
      technologies: "HTML, CSS, JavaScript, MongoDB, Mongoose",
    },
    {
      name: "Weather Dashboard",
      url: "https://chrisphailey.github.io/weather-dashboard/",
      description:
        "5-Day weather forecast by city.  The power of the future in the palm of your hands!",
    },
    {
      name: "Perkins Everitt About Page",
      url: "https://chrisphailey.github.io/paradigm-about/",
      description:
        "An about page mock-up created for a commercial lighting company.  Built off a static design with attention to detail and enhanced interactivity",
      technologies: "HTML, CSS, Alpine.js, TailwindCSS",
    },
  ]);

  return (
    <Container class="container d-flex align-items-center projects-container">
      <Row class="row projects-row">
        {projects.map((image, i) => (
          <div class="col-md-4 hoverable mt-5">
            {/* <Modal.Dialog
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              className="modal-container"
            > */}
            {/* <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <p>Modal body text goes here.</p>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleShow}>
                  Close
                </Button>
                <Button variant="primary">Save changes</Button>
              </Modal.Footer>
            </Modal.Dialog> */}
            <a href={image.url}>
              <Card style={{ width: "18rem" }}>
                {/* <Card.Img
                  variant="top"
                  src={require(`../../assets/project-img/${i}.png`)}
                  className="card-img"
                /> */}
                <div>
                  <img
                    alt="Card image"
                    class="card-image"
                    src={require(`../../assets/project-img/${i}.png`)}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="border-white border-b-2">
                    {image.name}
                  </Card.Title>
                  <Card.Text>{image.description}</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
