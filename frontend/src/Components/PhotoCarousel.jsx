import Carousel from "react-bootstrap/Carousel";
import React from "react";
import Photo1 from "../Assets/Photo1.jpeg";
import Photo2 from "../Assets/Photo4.jpeg";
import Photo3 from "../Assets/Photo3.JPG";
import "./Home.css";

function PhotoCarousel() {
  return (
    <div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 blend-img"
            src={Photo1}
            alt="First slide"
            style={{ maxWidth: "290px", height: "auto", margin:"10px auto"}}
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 blend-img"
            src={Photo2}
            alt="Second slide"
            style={{ maxWidth: "290px", height: "auto", margin:"10px auto" }}
          />
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 blend-img"
            src={Photo3}
            alt="Third slide"
            style={{ maxWidth: "290px", height: "auto", margin:"10px auto" }}
          />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default PhotoCarousel;
