import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
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

const INITIAL_GIF = "14456779"; // initial load
const FINAL_SAD_GIF = "14456797"; // last gif shown on step 3 click
const YES_GIF = "14456794"; // on Yes

// Map nextStep -> gif post id after a No click leads to that step
const NO_STEP_TO_GIF = {
  1: "14456827", // after first No
  2: "14456837", // ensure change after "Are you sure?"
  3: "14456800",
  4: FINAL_SAD_GIF, // show last gif when clicking "Angu don't do this to me"
};

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

const Confetti = ({ active, durationMs = 2500, pieceCount = 120, sourceRef, mountRef }) => {
  const [pieces, setPieces] = useState([]);
  useEffect(() => {
    if (!active) {
      setPieces([]);
      return;
    }
    // Measure the source area (gif wrapper) so confetti appears to originate from it
    const rect = sourceRef?.current?.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const originLeft = rect ? rect.left : 0;
    const originTop = rect ? rect.top + rect.height * 0.25 : 0; // bias towards upper-middle
    const originWidth = rect ? rect.width : viewportWidth;
    const originHeight = rect ? rect.height * 0.5 : viewportHeight * 0.5;

    const containerHeight = rect ? rect.height : viewportHeight * 0.5;
    const endY = containerHeight + 120; // px beyond bottom

    const newPieces = Array.from({ length: pieceCount }).map((_, i) => {
      const leftPx = originLeft + Math.random() * originWidth;
      const topPx = originTop + Math.random() * originHeight;
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
      const driftX = (Math.random() * 80 - 40); // px
      const sizeW = 8 + Math.random() * 8; // 8-16px
      const sizeH = 10 + Math.random() * 10; // 10-20px
      return { id: i, leftPx, topPx, delay, fallTime, color, driftX, sizeW, sizeH, endY };
    });
    setPieces(newPieces);
    const timer = setTimeout(() => setPieces([]), durationMs + 1000);
    return () => clearTimeout(timer);
  }, [active, durationMs, pieceCount, sourceRef]);

  if (!active) return null;
  if (!mountRef?.current) return null;
  return createPortal(
    <div className="confetti-container">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.leftPx}px`,
            top: `${p.topPx}px`,
            backgroundColor: p.color,
            width: `${p.sizeW}px`,
            height: `${p.sizeH}px`,
            animationDuration: `${p.fallTime}ms`,
            animationDelay: `${p.delay}ms`,
            ['--driftX']: `${p.driftX}px`,
            ['--endY']: `${p.endY}px`,
            ['--fallTime']: `${p.fallTime}ms`,
          }}
        />
      ))}
    </div>,
    mountRef.current
  );
};

const CutieAngira = () => {
  const [noStep, setNoStep] = useState(0); // 0..4
  const [currentGif, setCurrentGif] = useState(INITIAL_GIF);
  const [accepted, setAccepted] = useState(false);
  const gifContainerRef = useRef(null);
  const gifWrapperRef = useRef(null);
  const confettiMountRef = useRef(null);

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
      // At last step ("I'm gonna cry"), keep the current gif unchanged
      return;
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
              <div className="gif-wrapper" ref={gifWrapperRef}>
                <div className="confetti-local-mount" ref={confettiMountRef} />
                <div ref={gifContainerRef} className="gif-embed" />
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center mt-4">
            <Col md={8} lg={6}>
              <div className="custom-text text-center poleno-font-semibold invite-title" aria-live="polite">
                Would you like to watch a movie with me?
              </div>
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
        <Confetti active={accepted} sourceRef={gifWrapperRef} mountRef={confettiMountRef} />
      </div>
    </div>
  );
};

export default CutieAngira;
