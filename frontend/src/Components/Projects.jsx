import Container from "react-bootstrap/Container";
import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DynamicHeading from "./DynamicHeading";
import Project1 from "../Assets/Project-imgs/CodeCommunity.png";
import Project2 from "../Assets/Project-imgs/VCLogin.png";
import Project3 from "../Assets/Project-imgs/PFVwithEditor2.png";
import PCubed from "../Assets/Project-imgs/PC-1.png";
import ProjectModal from "./ProjectModal";
import Carousel from "react-bootstrap/Carousel";
import { useMediaQuery } from "react-responsive";

function Projects() {
  const [modalShow, setModalShow] = useState(false);
  const phoneScreen = useMediaQuery({ minWidth: 576 });
  const [selectedProject, setSelectedProject] = useState({
    title: "",
    image: "",
    description: "",
    tech: "",
    link: "",
  });

  const handleShowModal = (title, image, description, tech, link) => {
    setSelectedProject({ title, image, description, tech, link });
    setModalShow(true);
  };

  return (
    <div className="panel" id="panel_2">
      <Container
        className="sans-font"
        style={{ height: "92.2vh", paddingTop: "7%" }}
      >
        <h1 className="  poleno-font-semibold mb-5">
          <Row>
            <Col md="11">
              <DynamicHeading text="Projects!" />
              {phoneScreen && (
                <svg
                  width="287"
                  height="12"
                  viewBox="5 0 287 15"
                  fill="none"
                  id="wavy-line"
                >
                  <path
                    d="M2 6.49995C2 6.49995 4.61553 12.9999 11.8078 12.9999C19 12.9999 25.5236 1.99998 33.2618 1.99996C41 1.99994 46.884 12.9999 55.942 12.9999C65 12.9999 67.5659 1.99996 76.783 1.99996C86 1.99996 90.1522 12.9999 100.076 12.9999C110 12.9999 111.834 1.99996 120.917 1.99996C130 1.99996 134.921 12.9999 144.21 12.9999C153.5 12.9999 156.603 1.99996 165.051 1.99996C173.5 1.99996 177.189 12.9999 188.345 12.9999C199.5 12.9999 199.871 1.99998 209.186 1.99996C218.5 1.99994 222.958 12.9999 232.479 12.9999C242 12.9999 244 1.99996 253.32 1.99994C262.64 1.99992 269 12.9999 274.5 12.9999C280 13 285 8.50001 285 7.50001"
                    stroke=""
                    stroke-width="3"
                  />
                </svg>
              )}
            </Col>
            <Col md="1">
              {phoneScreen && (
                <svg
                  width="80px"
                  height="80px"
                  viewBox="0 0 1024 1024"
                  class="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M450.72 418.17c-42.29-21.86-144.5-220-171.65-198.22s-40.59 114.28 0.29 171.31 132 97 153.52 129.58 18.45 57.07 13.36 63.2S262.49 462 217.66 485.53s-28.41 84.69 17.56 132.54S427 651.39 455.57 672.76s32.72 55 20.49 55-145.88-32.38-192.77-24.15-68.25 39.89 0.12 73.42 180.26 8.87 199.28 28.21 6.8 28.54-7.47 29.58-110.14-4.91-143.78 0.24 6.21 56.07 23.57 69.3 80.59 19.24 98.94 16.15 36.67-26.58 51-20.48 3.14 45.88 8.25 53 46.92 9.1 53-0.09-10.26-37.71-0.09-51 32.65 11.16 66.28-1.13 109-70.55 111-104.2-132.52 27.76-167.19 26.8c-24.48-4-34.71-21.36-19.43-30.56s228.33-55.45 244.57-96.27 4-34.68-21.47-34.63S605.6 724.45 590.26 700 791 610 813.3 555.9s29.37-119.36-0.22-127.47-147.62 137.92-194.54 130.86-1.06-21.41 19.29-48 132.36-120.51 133.32-154.16 10.08-67.32-27.65-71.33-129.27 135.84-149.69 123.63 52.89-78.61 64-143.89S632.09 133 611.7 137.14s-19.37 4.11-19.34 22.47 10.33 79.52-1.85 114.21-13.14 60.18-23.35 54.08-10.27-43.83-4.2-73.41 23.3-92.83 13.07-112.19S545.27 48.53 467.8 68s-72.25 89.86-65 136.75 27.67 83.57 45.09 128.41 21.71 94.77 2.83 85.01z"
                    fill="#ce796bff"
                  />
                </svg>
              )}
            </Col>
          </Row>
        </h1>
        {/*  */}
        <Carousel data-bs-theme="">
          <Carousel.Item style={{ height: phoneScreen ? "400px" : "300px" }}>
            <div
              className="sans-font m-1"
              onClick={() =>
                handleShowModal(
                  "PCubed",
                  PCubed,
                  "This was a group project made for a university class with a group of 12 people, who were assigned real Software Management roles, namely, Project Manager (Me), Built Master, Test and Dev teams, Risk Officers and Triage team. We worked with a Stakholder to build the first part of web-app which he desired to furture work on. Our task included making a interactive and visually appealing UI experience, make a structured database catalog to store Projectile Point Artifacts. It was a fun project to work on and I learned so many things about software development and management and through my role of Project Manager, I gained some insights on what it takes to work with a larger team some of the challenges I tackled were communication and on time product delivery, when you have a diverse group of people with unique schedules.",
                  "PostgreSQL, React, MaterialUI, Docker",
                  "https://github.com/UniversityOfSaskatchewanCMPT371/term-project-2024-team-4"
                )
              }
            >
              <img
                className="d-block w-100 project-imgs"
                src={PCubed}
                alt="4th Project"
                style={{
                  maxWidth: phoneScreen ? "500px" : "270px",
                  height: "auto",
                  margin: "0 auto",
                }}
              />
            </div>
            <Carousel.Caption>PCubed</Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item style={{ height: phoneScreen ? "400px" : "300px" }}  >
            <div
              className="sans-font m-1"
              onClick={() =>
                handleShowModal(
                  "Code Community",
                  Project1,
                  "The Code Community is one of the fastest and biggest projects that I have made for my class CMPT 353. This course had a set of requirements for the project and they wanted us to make clone of Reddit, with fewer features. My project features some of important features of reddit, such as assorting all reddits under channels and calling them topic, search using topic, channels and tag names, Joining channels and topics, and sub-reddits. This project uses MySQL as the database. Three words to describe it: learning, deadline, fun",
                  "React, Express NodeJS, MySQL, Bootstrap",
                  "https://git.cs.usask.ca/ujc862/project-353-the-code-community.git"
                )
              }
            >
              <img
                className="d-block w-100 project-imgs"
                src={Project1}
                alt="First Project"
                style={{
                  maxWidth: phoneScreen ? "500px" : "270px",
                  height: "auto",
                  margin: "0 auto",
                }}
              />
            </div>
            <Carousel.Caption>Code Community</Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item style={{ height: phoneScreen ? "400px" : "300px" }}>
            <div
              className="sans-font "
              onClick={() =>
                handleShowModal(
                  "Volunteer Connect",
                  Project2,
                  "This was my first ever group project based on Software Development, where I leaarned some basic concepts of Agile - Scrum, software development and working in a team. This project made me confident to talk with team members and how to build project in asychronomous environment. The best and worst part about this projet was learned new technology while creating deliverables. I also learned how important is it for a team to have a leader, as we didn't have any at first but as we went into the project we felt we needed someone to guide us, and that's when I took the initiative to lead the team as the project idea was mine.",
                  "MongoDB, React, Express, Docker",
                  "https://git.cs.usask.ca/ujc862/cmpt-370-fall-2023.git"
                )
              }
            >
              <img
                className="d-block w-100 project-imgs"
                src={Project2}
                alt="First Project"
                style={{
                  maxWidth: phoneScreen ? "500px" : "270px",
                  height: "auto",
                  margin: "0 auto",
                }}
              />
            </div>
            <Carousel.Caption>Volunteer Connect</Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: phoneScreen ? "400px" : "300px" }}>
            <div
              className="sans-font"
              onClick={() =>
                handleShowModal(
                  "Pathfinding Visualizer",
                  Project3,
                  "This was one of my personal project made in summer 2024, when I was trying to learn new algorithms and started seraching for shortest distance algorithm. This project explores different pathfinding algorithms and visualizes the paths taken and possibilities searched when finding path between start and end points with some barriers on way. It was fun learning different algorithm approaches using the visualizer I made. Confession: I did use ChatGPT to help me integrate the algorithms.",
                  "Python, PyGame",
                  "https://github.com/nisarg-11-here/Pathfinding_Visualizer"
                )
              }
            >
              <img
                className="d-block w-100 project-imgs"
                src={Project3}
                alt="First Project"
                style={{
                  maxWidth: phoneScreen ? "500px" : "270px",
                  height: "auto",
                  margin: "0 auto",
                }}
              />
            </div>
            <Carousel.Caption>Pathfinding Visualizer</Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      <ProjectModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        projectTitle={selectedProject.title}
        projectImage={selectedProject.image}
        projectDescription={selectedProject.description}
        projectTech={selectedProject.tech}
        projectLink={selectedProject.link}
      />
    </div>
  );
}

export default Projects;
