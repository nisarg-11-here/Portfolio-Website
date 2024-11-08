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
  // const upBtnRef = useRef(null);
  // const dnBtnRef = useRef(null);
  const activeSlideRef = useRef(null);
  const totalSlides = 4; // number of panels

  useEffect(() => {
    const panels = panelsRef.current;
    const sections = gsap.utils.toArray(".panel");
    const activeSlide = activeSlideRef.current;
    // const dnBtn = dnBtnRef.current;
    // const upBtn = upBtnRef.current;

    let currentIndex = 1;
    activeSlide.innerHTML = currentIndex;

    const updateUI = (index) => {
      currentIndex = index;
      activeSlide.innerHTML = currentIndex;

      const nextIndex = (currentIndex % totalSlides) + 1;
      const prevIndex = ((currentIndex - 2 + totalSlides) % totalSlides) + 1;

      // dnBtn.setAttribute("data-down", nextIndex);
      // upBtn.setAttribute("data-up", prevIndex);
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

    // dnBtn.addEventListener("click", () => {
    //   const nextPanel = parseInt(dnBtn.getAttribute("data-down"), 10);
    //   goToPanel(nextPanel);
    // });

    // upBtn.addEventListener("click", () => {
    //   const prevPanel = parseInt(upBtn.getAttribute("data-up"), 10);
    //   goToPanel(prevPanel);
    // });

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
        <span className="activeSlide d-none" ref={activeSlideRef}></span>
      </div>
    </div>
  );
};

export default Main;
