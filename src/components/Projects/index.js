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
      github: "https://github.com/SpencerHulse/n-sense",
      description: "An ecommerce site selling handmade therapeutic products",
      technologies:
        "React, Apollo, GraphQL, Express.js, Mongoose, Tailwind, Stripe, AWS, Heroku",
    },
    {
      name: "Tenantive.ly",
      url: "https://glacial-temple-16968.herokuapp.com/",
      github: "https://github.com/SpencerHulse/tenantively-maybe-probably",
      description:
        "A real estate management application providing rental listing and budget services to landlords",
      technologies:
        "HTML, CSS, JavaScript, Bootstrap, Handlebars.js, Node.js, mySQL2, AWS",
    },
    {
      name: "Day Planner",
      url: "https://chrisphailey.github.io/planner-challenge2/",
      github: "https://github.com/chrisphailey/planner-challenge2",
      description:
        "A simple and sleek day planner color coded to display tasks in the past, present and future",
      technologies: "HTML, CSS, JavaScript",
    },
    {
      name: "Budget-Tracker",
      url: "https://secret-harbor-25388.herokuapp.com/",
      github: "https://github.com/chrisphailey/budget-tracker",
      description:
        "An everyday budget tracker for the everyday person.  No complex spreadsheets... just simple monitoring of daily transactions",
      technologies: "HTML, CSS, JavaScript, MongoDB, Mongoose",
    },
    {
      name: "Weather Dashboard",
      url: "https://chrisphailey.github.io/weather-dashboard/",
      github: "https://github.com/chrisphailey/weather-dashboard",
      description:
        "5-Day weather forecast by city.  The power of the future in the palm of your hands!",
    },
    // {
    //   name: "Perkins Everitt About Page",
    //   url: "https://chrisphailey.github.io/paradigm-about/",
    //   description:
    //     "An about page mock-up created for a commercial lighting company.  Built off a static design with attention to detail and enhanced interactivity",
    //   technologies: "HTML, CSS, Alpine.js, TailwindCSS",
    // },
  ]);

  return (
    <Container class="container d-flex align-items-center projects-container">
      <Row class="row projects-row">
        {/* {projects.map((image, i) => ( */}
        <div class="col-md-4 hoverable mt-5">
          <a href="https://n-sense.herokuapp.com/">
            <Card style={{ width: "18rem" }}>
              <div>
                <img
                  alt="Card image"
                  class="card-image"
                  src={require(`../../assets/project-img/0.png`)}
                  key="N-Sense"
                />
              </div>
              <Card.Body>
                <Card.Title className="border-b-2 border-white">
                  N-Sense
                </Card.Title>
                <Card.Text>
                  "An ecommerce site selling handmade therapeutic products"
                </Card.Text>
                <a href="https://github.com/SpencerHulse/n-sense">
                  <Card.Text>Github Repo</Card.Text>
                </a>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div class="col-md-4 hoverable mt-5">
          <a href="https://glacial-temple-16968.herokuapp.com/">
            <Card style={{ width: "18rem" }}>
              <div>
                <img
                  alt="Card image"
                  class="card-image"
                  src={require(`../../assets/project-img/1.png`)}
                  key="Tenantive.ly"
                />
              </div>
              <Card.Body>
                <Card.Title className="border-b-2 border-white">
                  Tenantive.ly
                </Card.Title>
                <Card.Text>
                  {" "}
                  "A real estate management application providing rental listing
                  and budget services to landlords"
                </Card.Text>
                <a href="https://github.com/SpencerHulse/tenantively-maybe-probably">
                  <Card.Text>Github Repo</Card.Text>
                </a>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div class="col-md-4 hoverable mt-5">
          <a href="https://chrisphailey.github.io/planner-challenge2/">
            <Card style={{ width: "18rem" }}>
              <div>
                <img
                  alt="Card image"
                  class="card-image"
                  src={require(`../../assets/project-img/2.png`)}
                  key="Day Planner"
                />
              </div>
              <Card.Body>
                <Card.Title className="border-b-2 border-white">
                  Day Planner
                </Card.Title>
                <Card.Text>
                  "A simple and sleek day planner color coded to display tasks
                  in the past, present and future"
                </Card.Text>
                <a href="https://github.com/chrisphailey/planner-challenge2">
                  <Card.Text>Github Repo</Card.Text>
                </a>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div class="col-md-4 hoverable mt-5">
          <a href="https://secret-harbor-25388.herokuapp.com/">
            <Card style={{ width: "18rem" }}>
              <div>
                <img
                  alt="Card image"
                  class="card-image"
                  src={require(`../../assets/project-img/3.png`)}
                  key="Budget-Tracker"
                />
              </div>
              <Card.Body>
                <Card.Title className="border-b-2 border-white">
                  Budget-Tracker
                </Card.Title>
                <Card.Text>
                  {" "}
                  "An everyday budget tracker for the everyday person. No
                  complex spreadsheets... just simple monitoring of daily
                  transactions"
                </Card.Text>
                <a href="https://github.com/chrisphailey/budget-tracker">
                  <Card.Text>Github Repo</Card.Text>
                </a>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div class="col-md-4 hoverable mt-5">
          <a href="https://chrisphailey.github.io/weather-dashboard/">
            <Card style={{ width: "18rem" }}>
              <div>
                <img
                  alt="Card image"
                  class="card-image"
                  src={require(`../../assets/project-img/4.png`)}
                  key="Weather Dashboard"
                />
              </div>
              <Card.Body>
                <Card.Title className="border-b-2 border-white">
                  Weather Dashboard
                </Card.Title>
                <Card.Text>
                  "5-Day weather forecast by city. The power of the future in
                  the palm of your hands!"
                </Card.Text>
                <a href="https://github.com/chrisphailey/weather-dashboard">
                  <Card.Text>Github Repo</Card.Text>
                </a>
              </Card.Body>
            </Card>
          </a>
        </div>
        {/* ))} */}
      </Row>
    </Container>
  );
}

export default Projects;
