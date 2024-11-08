import Container from "react-bootstrap/esm/Container";
import "./Footer.css";
import { useMediaQuery } from "react-responsive";

export function Footer() {
  const isSmallScreen = useMediaQuery({ minWidth: 1200 }); // Check if screen size is less than or equal to 1200px

  return (
    <Container>
      {isSmallScreen && (
        <footer>
          <code className="custom-text">
            {" "}
            Designed &amp; built by{" "}
            <code className="custom-text3">Nisarg Chaudhary</code>{" "}
          </code>
        </footer>
      )}
    </Container>
  );
}
