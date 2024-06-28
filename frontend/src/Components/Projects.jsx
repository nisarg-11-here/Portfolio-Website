import Container from "react-bootstrap/Container";
import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PhotoCarousel from "./PhotoCarousel";

function Projects() {
  return (
    <div>
      <Container
        className="sans-font"
        style={{ height: "92.2vh", paddingTop: "10%" }}
      >
        <h1 className="poleno-font-semibold text-primary">Projects !</h1>

        <Row>
            <Col>
                <Card>
                <Card.Body>
                    <Card.Img>

                    </Card.Img>
                    <Card.Text>Hello world!</Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                <Card.Body>
                    <Card.Img>
                        
                    </Card.Img>
                    <Card.Text>Hello world!</Card.Text>
                </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row className="mt-2">
            <Col>
                <Card>
                    <PhotoCarousel />
                </Card>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
