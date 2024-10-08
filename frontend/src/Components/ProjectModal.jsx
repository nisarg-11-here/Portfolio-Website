// ProjectModal.js
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./DynamicHeading.css";

function ProjectModal({ show, onHide, projectTitle, projectImage, projectDescription, projectTech }) {
  return (
    <Modal show={show} onHide={onHide} centered size="xl" dialogClassName="custom-modal sans-font" >
      <Modal.Header closeButton className="m-3 mt-0 mb-0 ">
        <Modal.Title>{projectTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
            <Row>
                <Col xs={12} md={6} >
                    <img src={projectImage} alt={projectTitle} className="w-100" /> 
                </Col>
                <Col xs={12} md={6} className="">
                    <h5> Description </h5>
                    {projectDescription}
                    <hr />
                    <h5> Technologies </h5>
                    {projectTech}
                    <hr />
                    <Button variant="light" onClick={onHide} className="">
                        See it yourself!
                    </Button>
                </Col>
            </Row>
        </div>
       
      </Modal.Body>
      {/* Might make a button here later */}
      {/* <Modal.Footer>x 
        <Button variant="outline-light" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default ProjectModal;
