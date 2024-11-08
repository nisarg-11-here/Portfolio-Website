import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/esm/CardBody";
import Photo2 from "../Assets/NisargBrand.png";
import { useMediaQuery } from "react-responsive";
import Button from "react-bootstrap/esm/Button";
import DynamicHeading from "./DynamicHeading";

function About() {
  const isSmallScreen = useMediaQuery({ minWidth: 1200 }); // Check if screen size is less than or equal to 1200px
  const phoneScreen = useMediaQuery({ minWidth: 576 }); // Check if screen size is less than or equal to 1200px

  return (
    <div className="panel" id="panel_3">
      <Container
        className="sans-font"
        style={{ height: "92.2vh", paddingTop: "7%" }}
      >
        <h1 className="poleno-font-semibold p-2 mb-3">
          <Row>
            <Col>
              {phoneScreen && (
                <svg
                  width="70px"
                  height="60px"
                  viewBox="0 0 1024 1024"
                  class="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M513.92 68.71h12A116.59 116.59 0 0 1 642.5 185.3v728.84a41.15 41.15 0 0 1-41.15 41.15H438.48a41.15 41.15 0 0 1-41.15-41.15V185.3A116.59 116.59 0 0 1 513.92 68.71z"
                    fill="#ce796bff"
                  />
                  <path
                    d="M424 752c-53.89 0-131.52-8.8-183.29-84.94-41.15-60.51-60.32-156.89-60.32-303.31a57.1 57.1 0 1 1 114.19 0c0 119.08 13.64 199.53 40.55 239.1 14.68 21.58 34.66 35 88.86 35A57.1 57.1 0 1 1 424 752zM603.83 584.48a57.1 57.1 0 0 1 0-114.19c50.76 0 78.59-8.07 96-27.86 24.69-28 37.2-87.16 37.2-175.79a57.1 57.1 0 1 1 114.19 0c0 120.56-20.88 200.4-65.72 251.29-51.96 58.98-124.38 66.55-181.67 66.55z"
                    fill="#ce796bff"
                  />
                  <path
                    d="M438.25 175.29l33.56 0 0 83.94-33.56 0 0-83.94Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M232.017583 381.607965l33.493777-2.10725 5.270637 83.774363-33.493777 2.10725-5.270637-83.774363Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M220.695979 523.146565l32.46596-8.499119 21.257927 81.203597-32.46596 8.499118-21.257927-81.203596Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M290.392718 653.891246l16.78-29.063813 72.694172 41.97-16.78 29.063813-72.694172-41.97Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M733.163193 472.110713l15.584539 29.721975-74.340361 38.979922-15.584539-29.721974 74.340361-38.979923Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M788.434288 373.40643l31.341442 11.999483-30.013008 78.390962-31.341443-11.999482 30.013009-78.390963Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M763.93801 259.133152l33.412708 3.140781-7.855695 83.571596-33.412708-3.140781 7.855695-83.571596Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M438.25 386.54l33.56 0 0 83.94-33.56 0 0-83.94Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M438.25 599.7l33.56 0 0 83.94-33.56 0 0-83.94Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M438.25 810.96l33.56 0 0 83.94-33.56 0 0-83.94Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M507.72 110.58l33.56 0 0 83.94-33.56 0 0-83.94Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M507.72 321.84l33.56 0 0 83.94-33.56 0 0-83.94Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M507.72 534.99l33.56 0 0 83.94-33.56 0 0-83.94Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M507.72 746.25l33.56 0 0 83.94-33.56 0 0-83.94Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M568.62 194.32l33.56 0 0 83.94-33.56 0 0-83.94Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M568.62 405.58l33.56 0 0 83.94-33.56 0 0-83.94Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M568.62 618.74l33.56 0 0 83.94-33.56 0 0-83.94Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M568.62 829.99l33.56 0 0 83.94-33.56 0 0-83.94Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M183.54 250.68S200 328 239.21 328 299 263 299 263l-35.05 22.68-28.87-68-14.43 59.79z"
                    fill="#e5e1ddff"
                  />
                </svg>
              )}
            </Col>

            <Col md="auto">
              <span className="">
                {phoneScreen && (
                  <svg
                    className="mt-0"
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
                <DynamicHeading text="More about me!" />
              </span>
            </Col>
          </Row>
        </h1>
        <Row className="" style={{}}>
          <Col className="">
            <Card className=" rounded-3 p-3 card-effect">
              <CardBody
                className="sans-font"
                style={{ fontSize: phoneScreen ? "16px" : "12px" }}
              >
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
                {phoneScreen && (
                  <p>
                    From early age, I was passionate about computers and how
                    they work. The games and apps that I used on mobile phones
                    made me wonder how they were created. Well, now I know.
                  </p>
                )}
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
              <Card className=" rounded-3 card-effect">
                <img
                  className="d-block w-100"
                  src={Photo2}
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
        <Button
          variant="outline-primary"
          id="customButton"
          className="sans-font mt-2 mb-1 border rounded-1"
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume?
        </Button>
      </Container>
    </div>
  );
}

export default About;
