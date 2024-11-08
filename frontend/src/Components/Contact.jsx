import React from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import "./Home.css";
import DynamicHeading from "./DynamicHeading";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { useMediaQuery } from "react-responsive";

function Contact() {
  const phoneScreen = useMediaQuery({ minWidth: 576 });

  return (
    <div className="panel" id="panel_4">
      <Container
        className="sans-font "
        style={{ height: "80vh", paddingTop: "5%" }}
      >
        {/* <h1 className="poleno-font-semibold text-primary">Get in touch!</h1> */}
        <h1 className="poleno-font-semibold p-2 mb-3">
          <Row>
            <Col md="11">
              <span>
                {/* <line id="text-effect">Get in touch!</line> */}
                <DynamicHeading text="Get in touch!" />
                {phoneScreen && (
                  <svg
                    width="287"
                    height="12"
                    viewBox="5 0 287 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    id="wavy-line"
                  >
                    <path
                      d="M2 6.49995C2 6.49995 4.61553 12.9999 11.8078 12.9999C19 12.9999 25.5236 1.99998 33.2618 1.99996C41 1.99994 46.884 12.9999 55.942 12.9999C65 12.9999 67.5659 1.99996 76.783 1.99996C86 1.99996 90.1522 12.9999 100.076 12.9999C110 12.9999 111.834 1.99996 120.917 1.99996C130 1.99996 134.921 12.9999 144.21 12.9999C153.5 12.9999 156.603 1.99996 165.051 1.99996C173.5 1.99996 177.189 12.9999 188.345 12.9999C199.5 12.9999 199.871 1.99998 209.186 1.99996C218.5 1.99994 222.958 12.9999 232.479 12.9999C242 12.9999 244 1.99996 253.32 1.99994C262.64 1.99992 269 12.9999 274.5 12.9999C280 13 285 8.50001 285 7.50001"
                      stroke=""
                      stroke-width="3"
                    />
                  </svg>
                )}
              </span>
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
                    d="M212.06 633.49c35.65 113.16 481.39 205.46 602-56.32C877.61 439.2 719 63 533 70.78c-132 5.49-407 289.43-320.94 562.71z"
                    fill="#ce796bff"
                  />
                  <path
                    d="M363.47 596.15s74.41 80.23 115.75 96.76l-18.6 260.43h94S542.25 635 539.15 596.8c-0.26-3.26 89.91-123 89.91-123l-99 70-16.74-180.56S493.68 575.1 486.45 634z"
                    fill="#e5e1ddff"
                  />
                </svg>
              )}
            </Col>
          </Row>
        </h1>
        <div style={{ textAlign: "center" }}>
          <div className={`sans-font custom-text3 fs-4 ${phoneScreen ? "m-5" : "m-4 mb-2"}`}>
            Fill <span className="custom-text2">free</span> to connect with me!
          </div>

          <br />
          <a
            href="https://github.com/nisarg-11-here"
            target="_blank"
            className="m-3 mt-2 mb-0"
          >
            <svg width="35px" viewBox="0 0 20 20" version="1.1" id="icons">
              <title>github [#142]</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-140.000000, -7559.000000)"
                  fill="#e5e1ddff"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                      id="github-[#142]"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/nisargchaudhary/"
            className="m-3 mt-2 mb-0"
            target="_blank"
          >
            <svg width="30px" viewBox="0 0 20 20" version="1.1" id="icons">
              <title>linkedin [#161]</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-180.000000, -7479.000000)"
                  fill="#e5e1ddff"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"
                      id="linkedin-[#161]"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </a>

          <a
            href="https://www.instagram.com/nisarg.11/"
            target="_blank"
            className="m-3 mt-2 mb-0"
          >
            <svg width="35px" viewBox="0 0 24 24" fill="none" id="icons">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                fill="#e5e1ddff"
              />
              <path
                d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                fill="#e5e1ddff"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                fill="#e5e1ddff"
              />
            </svg>
          </a>
         

          <div className="m-4">
            <svg
              width="127"
              height="2"
              viewBox="0 0 227 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.995605"
                y1="1"
                x2="226.004"
                y2="1"
                stroke="#ce796bff"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>

          <Button
            className="sans-font border rounded-1"
            id="customButton"
            variant="outline-primary"
            style={{ display: "inline-block" }}
            onClick={(e) => {
              window.location.href = "mailto:chaudharynisarg555@gmail.com";
              e.preventDefault();
            }}
          >
            Email?
          </Button>
        </div>
      </Container>
      {/* <div className="sans-font text-primary mt-5 text-center">
        <footer id="footer">
          <div class="footer-text pb-3">
            Designed &amp; built by{" "}
            <line className="text-black">Nisarg Chaudhary</line>{" "}
          </div>
        </footer>
      </div> */}
    </div>
  );
}

export default Contact;
