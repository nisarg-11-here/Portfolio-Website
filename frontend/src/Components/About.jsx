import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/esm/CardBody";
import Photo from "../Assets/Nisarg-About-Photo.png";
import CardImg from "react-bootstrap/esm/CardImg";
import { useMediaQuery } from "react-responsive";

function About() {
  const isSmallScreen = useMediaQuery({ minWidth: 1200 }); // Check if screen size is less than or equal to 1200px

  return (
    <div>
      <Container
        className="sans-font"
        style={{ height: "92.2vh", paddingTop: "7%" }}
      >
        <h1 className="poleno-font-semibold text-primary d-flex justify-content-start justify-content-end border border-white border-2 rounded-2 p-2 mb-3">
          More about me !
        </h1>
        <Row className="text-white" style={{}}>
          <Col className="">
            <Card className="bg-primary text-white rounded-3 p-3 card">
              <CardBody>
                <p>
                  <strong>Hello Stranger! </strong>
                </p>
                <p>
                  My name is Nisarg Chaudhary. I completed my high school from
                  back home India, where I was first introduced to the world of
                  Programming. Then I moved to Canada to study Bachelor of
                  Computer Science and got accepted in the Honours Program -
                  Software Engineering Option.
                </p>
                <p>
                  From early age, I was passionate about computers and how they
                  work. The games and apps that I used on mobile phones made me
                  wonder how they were created. Well, now I know.
                </p>
                <p>
                  I love learning new things and keeping myself busy (reason 101
                  why I created this website)
                  <br />
                  <br />
                  Get in touch with me for a little chat! (I love yapping, jk)
                </p>
              </CardBody>
            </Card>
          </Col>
          {isSmallScreen && (
            <Col>
              <Card className="bg-primary rounded-3 card">
                <img
                  className="d-block w-100"
                  src={Photo}
                  alt="First slide"
                  style={{
                    maxWidth: "401.2px",
                    height: "auto",
                    margin: "10px auto",
                  }}
                />
              </Card>
            </Col>
          )}
        </Row>
        <Row>
          <div className="d-flex justify-content-start justify-content-center p-3">
            <Card
              className="bg-primary text-white rounded-3 p-3  card"
              style={{ width: "200px" }}
            >
              <div className="d-flex justify-content-start justify-content-center">
                Resume!
              </div>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default About;
