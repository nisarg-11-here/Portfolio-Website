import Button from "react-bootstrap/Button";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DynamicHeading from "./DynamicHeading";
import "../App.css";
import "./ButtonCss.css";
import { useMediaQuery } from "react-responsive";

function CollapsableNavbar() {
  const phoneScreen = useMediaQuery({ minWidth: 576 });
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-light myNavbar"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/" className="m-2 poleno-font-semibold">
            {" "}
            <DynamicHeading text="Portfolio / Nisarg" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Button
                variant="outline-primary"
                className="m-2 mt-1 mb-1 sans-font"
                id="projectsButton"
              >
                Projects
              </Button>
              <Button
                variant="outline-primary"
                className="sans-font m-2 mt-1 mb-1 button"
                id="contactButton"
              >
                Connect with me!
              </Button>
            </Nav>
            <Nav>
              {/* <Button
					variant="outline-primary"
					className="m-2 mt-1 mb-1"
					id="contactButton"
				>
					Not so useful links :)
				</Button> */}
              {phoneScreen && (
                <svg
                  width="50px"
                  height="50px"
                  className="m-0 p-0"
                  viewBox="0 0 306 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M55 31H154.812L191 94L227.188 31H306L252 127H150.5L114 64L77.5 127H0L55 31Z"
                    fill="#F74F2B"
                  />
                </svg>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default CollapsableNavbar;
