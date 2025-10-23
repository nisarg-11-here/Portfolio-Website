import React, { useEffect, useMemo, useRef, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./CutieAngira.css";

const NO_LABELS = [
  "No",
  "Are you sure?",
  "Pookie Please",
  "Angu don't do this to me",
  "I'm gonna cry",
];

// Map nextStep -> gif post id after a No click leads to that step
const NO_STEP_TO_GIF = {
  1: "14456827",
  2: "14456827",
  3: "14456837",
  4: "14456800",
};

const INITIAL_GIF = "14456779"; // initial load
const FINAL_SAD_GIF = "14456797"; // after last No is clicked again
const YES_GIF = "14456794"; // on Yes

function renderTenorInto(container, postId) {
  if (!container) return;
  container.innerHTML = "";
  const embed = document.createElement("div");
  embed.className = "tenor-gif-embed";
  embed.setAttribute("data-postid", postId);
  embed.setAttribute("data-share-method", "host");
  embed.setAttribute("data-aspect-ratio", "1");
  embed.setAttribute("data-width", "100%");
  // Anchor child (as Tenor's snippet includes)
  const a = document.createElement("a");
  a.href = `https://tenor.com/view/${postId}`;
  a.textContent = "View on Tenor";
  embed.appendChild(a);
  container.appendChild(embed);

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://tenor.com/embed.js";
  container.appendChild(script);
}

const Confetti = ({ active, durationMs = 2500, pieceCount = 120 }) => {
  const [pieces, setPieces] = useState([]);
  useEffect(() => {
    if (!active) {
      setPieces([]);
      return;
    }
    const newPieces = Array.from({ length: pieceCount }).map((_, i) => {
      const left = Math.random() * 100; // vw
      const delay = Math.random() * 300; // ms
      const fallTime = 1800 + Math.random() * 1600; // ms
      const colorPalette = [
        "#ffd166",
        "#06d6a0",
        "#ef476f",
        "#118ab2",
        "#8338ec",
        "#ffbe0b",
      ];
      const color = colorPalette[i % colorPalette.length];
      return { id: i, left, delay, fallTime, color };
    });
    setPieces(newPieces);
    const timer = setTimeout(() => setPieces([]), durationMs + 1000);
    return () => clearTimeout(timer);
  }, [active, durationMs, pieceCount]);

  if (!active) return null;
  return (
    <div className="confetti-container">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}vw`,
            backgroundColor: p.color,
            animationDuration: `${p.fallTime}ms, 700ms`,
            animationDelay: `${p.delay}ms, ${p.delay}ms`,
          }}
        />
      ))}
    </div>
  );
};

const CutieAngira = () => {
  const [noStep, setNoStep] = useState(0); // 0..4
  const [currentGif, setCurrentGif] = useState(INITIAL_GIF);
  const [accepted, setAccepted] = useState(false);
  const gifContainerRef = useRef(null);

  // Button scales: shrink No and grow Yes at same rate per step
  const scaleFactor = 0.15;
  const yesScale = useMemo(() => 1 + noStep * scaleFactor, [noStep]);
  const noScale = useMemo(
    () => Math.max(0.55, 1 - noStep * scaleFactor),
    [noStep]
  );

  useEffect(() => {
    renderTenorInto(gifContainerRef.current, currentGif);
  }, [currentGif]);

  const handleNoClick = () => {
    if (accepted) return; // locked when accepted

    if (noStep < 4) {
      const next = noStep + 1;
      setNoStep(next);
      const nextGif = NO_STEP_TO_GIF[next] || INITIAL_GIF;
      setCurrentGif(nextGif);
    } else {
      // Last instance clicked again
      setCurrentGif(FINAL_SAD_GIF);
    }
  };

  const handleYesClick = () => {
    setAccepted(true);
    setCurrentGif(YES_GIF);
  };

  return (
    <div className="panel" id="panel_invite">
      <div>
        <Container className="sans-font invite-container">
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <Card className="rounded-3 p-3 card-effect gif-card">
                <div ref={gifContainerRef} />
              </Card>
            </Col>
          </Row>

          <Row className="justify-content-center mt-4">
            <Col md={8} lg={6}>
              <Card className="rounded-3 p-3 card-effect invite-question">
                <div className="custom-text text-center">
                  <p className="display-6 m-0"><strong>Would you like to watch a movie with me?</strong></p>
                </div>
              </Card>
              <div className="invite-buttons">
                <button
                  className="invite-button sans-font"
                  onClick={handleYesClick}
                  style={{ transform: `scale(${yesScale})` }}
                  aria-label="Yes"
                >
                  Yes
                </button>
                <button
                  className="invite-button sans-font"
                  onClick={handleNoClick}
                  style={{ transform: `scale(${noScale})`, opacity: accepted ? 0.4 : 1 }}
                  aria-label={NO_LABELS[noStep]}
                  disabled={accepted}
                >
                  {NO_LABELS[noStep]}
                </button>
              </div>
              {accepted && (
                <div className="success-text">
                  <p>Yay! I knew it, call me fast fast</p>
                </div>
              )}
            </Col>
          </Row>
        </Container>
        <Confetti active={accepted} />
      </div>
    </div>
  );
};

export default CutieAngira;
