import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./Home.css";
import { useMediaQuery } from "react-responsive"; // Import useMediaQuery
import DateTime from "./DateTime";
    
function Home() {
  const isSmallScreen = useMediaQuery({ minWidth: 1200 }); // Check if screen size is less than or equal to 1200px

  return (
    <div>
      <div >
        <Container
          className="sans-font"
          style={{ height: "92.2vh",  paddingTop:"10%"}}
        >
          <Row id="homePage" className="text-white" style={{}}>
            <Col md="7" className="">
              <Card className="bg-primary text-white rounded-3 p-3 card">
                <div className="dateandtime">
                  <DateTime />
                  <p className="sans-font display-1">
                    <strong>Nisarg Chaudhary</strong>
                  </p>
                </div>
              </Card>

              {isSmallScreen && (
                <Card className="bg-primary text-white rounded-3 mt-4 p-3 card">
                  <div className="wrapper p-3">
                    <div className="tech">
                      <span>
                        &nbsp;Java, Python, C, Javascript, HTML / CSS, SQL, MIPS
                        Assembly, TXL,
                      </span>
                      <span>
                        &nbsp;Java, Python, C, Javascript, HTML / CSS, SQL, MIPS
                        Assembly, TXL,
                      </span>
                      <span>
                        &nbsp;Java, Python, C, Javascript, HTML / CSS, SQL, MIPS
                        Assembly,
                      </span>
                    </div>
                  </div>
                </Card>
              )}
            </Col>

            <Col md="5" className="">
            {!isSmallScreen && (
                <br />
            )}
              <Card className="bg-primary text-white rounded-3 card">
                <Card.Body>
                  <Card.Text>Hello Visitor!</Card.Text>
                  <Card.Text>
                    I am an Undergarduate Computer Science student with passion
                    for Art. Pursuing a minor in Studio Arts to complement my
                    technical studies.
                    <p>
                      Interested in Software Development, Frontend Development,
                      UI, UX and Design.
                    </p>
                  </Card.Text>
                  <hr />
                  <Card.Subtitle>
                    learn and create. create and learn.
                  </Card.Subtitle>
                </Card.Body>
              </Card>

              {isSmallScreen && ( // Conditionally render the card based on screen size
                <Card className="bg-primary text-white rounded-3 text-center mt-4 card">
                  <Card.Link
                    href="/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white m-4"
                  >
                    <s>Show</s> Know me more!
                  </Card.Link>
                </Card>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
