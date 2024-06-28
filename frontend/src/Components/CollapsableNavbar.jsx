import Button from "react-bootstrap/Button";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function CollapsableNavbar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" fixed="top">
        <Container>
			<Navbar.Brand href="/" className="m-2 poleno-font-semibold" style={{ color: '#2475FC' }}>Portfolio / Nisarg</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="me-auto">
					<Button
						variant="outline-primary"
						className="m-2 mt-1 mb-1 sans-font"
						href="/Projects"
					>
						Projects
					</Button>
					<Button
						variant="outline-primary"
						className="sans-font m-2 mt-1 mb-1"
						href="/Contact"
					>
						Connect with me!
					</Button>
				</Nav>
				<Nav>
				<Button
					variant="outline-primary"
					className="m-2 mt-1 mb-1"
					href="/Contact"
				>
					Not so useful links :)
				</Button>
				</Nav>
			</Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default CollapsableNavbar;
