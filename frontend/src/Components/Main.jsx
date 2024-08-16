import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import "./Main.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Main = () => {
  const panelsRef = useRef(null);
  const upBtnRef = useRef(null);
  const dnBtnRef = useRef(null);
  const activeSlideRef = useRef(null);
  const totalSlides = 4; // number of panels

  useEffect(() => {
    const panels = panelsRef.current;
    const sections = gsap.utils.toArray(".panel");
    const activeSlide = activeSlideRef.current;
    const dnBtn = dnBtnRef.current;
    const upBtn = upBtnRef.current;

    let currentIndex = 1;
    activeSlide.innerHTML = currentIndex;

    const updateUI = (index) => {
      currentIndex = index;
      activeSlide.innerHTML = currentIndex;

      const nextIndex = (currentIndex % totalSlides) + 1;
      const prevIndex = ((currentIndex - 2 + totalSlides) % totalSlides) + 1;

      dnBtn.setAttribute("data-down", nextIndex);
      upBtn.setAttribute("data-up", prevIndex);
    };

    const goToPanel = (panelIndex) => {
      gsap.to(panels, {
        ease: "power4.inOut",
        duration: 0.55,
        scrollTo: {
          y: `#panel_${panelIndex}`,
          autoKill: false,
        },
        onComplete: () => {
          updateUI(panelIndex);
        },
      });
    };

    dnBtn.addEventListener("click", () => {
      const nextPanel = parseInt(dnBtn.getAttribute("data-down"), 10);
      goToPanel(nextPanel);
    });

    upBtn.addEventListener("click", () => {
      const prevPanel = parseInt(upBtn.getAttribute("data-up"), 10);
      goToPanel(prevPanel);
    });

    // Button event listeners
    const homeButton = document.getElementById("homeButton");
    const projectsButton = document.getElementById("projectsButton");
    const aboutButton = document.getElementById("aboutButton");
    const contactButton = document.getElementById("contactButton");

    if (homeButton) homeButton.addEventListener("click", () => goToPanel(1));
    if (projectsButton)
      projectsButton.addEventListener("click", () => goToPanel(2));
    if (aboutButton) aboutButton.addEventListener("click", () => goToPanel(3));
    if (contactButton)
      contactButton.addEventListener("click", () => goToPanel(4));

    sections.forEach((eachPanel, index) => {
      let realIndex = index + 1;

      ScrollTrigger.create({
        scroller: panels,
        trigger: eachPanel,
        start: "top 50%",
        end: "top bottom",
        onEnter: () => updateUI(realIndex),
        onEnterBack: () => updateUI(realIndex),
      });
    });
  }, [totalSlides]);

  return (
    <div>
      <div className="panels" ref={panelsRef}>
        <Home />
        <Projects />
        <About />
        <Contact />
      </div>
      
      <div className="controls">
        <button
          className="up"
          ref={upBtnRef}
          data-up={totalSlides}
          style={{
            backgroundColor: "Transparent",
            padding: "0",
            margin: "0 15px",
            border: "transparent",
          }}
        >
          {/* <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" className="up-button">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071L12 9.41421L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z"
              fill="#000000"
            />
          </svg> */}
          <svg
            width="36"
            height="13"
            viewBox="0 0 68 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.13746 24.0197L31.3782 5.15268C33.0776 3.97568 35.3261 3.96581 37.0358 5.12784L64.2413 23.619"
              stroke="black"
              stroke-width="7"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <span className="activeSlide d-none" ref={activeSlideRef}></span>
        <button
          className="down"
          ref={dnBtnRef}
          data-down="2"
          style={{
            backgroundColor: "Transparent",
            padding: "0",
            margin: "0",
            border: "transparent",
          }}
        >
          <svg
            width="36"
            height="13"
            viewBox="0 0 68 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M64.1732 4.20012L36.8073 22.8851C35.1001 24.0508 32.8516 24.0456 31.1497 22.8722L4.06809 4.20012"
              stroke="black"
              stroke-width="7"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Main;
