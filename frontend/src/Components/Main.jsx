import React from "react";
import { useSwipeable } from "react-swipeable";
import { scroller } from "react-scroll";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
// import Contact from "./Contact";

const sections = ["home", "projects", "about", "contact"];

const Main = () => {
    // const handleSwipe = (direction) => {
    //     const currentIndex = sections.findIndex(
    //         (section) => section === document.activeElement.id
    //     );
    //     let nextIndex;
    //     if (direction === "Up") {
    //         nextIndex = (currentIndex + 1) % sections.length;
    //     } else {
    //         nextIndex = (currentIndex - 1 + sections.length) % sections.length;
    //     }

    //     scroller.scrollTo(sections[nextIndex], {
    //         duration: 800,
    //         delay: 0,
    //         smooth: "easeInOutQuart",
    //     });
    // };

    // const handlers = useSwipeable({
    //     onSwipedUp: () => handleSwipe("Up"),
    //     onSwipedDown: () => handleSwipe("Down"),
    // });

    return (
        // <div {...handlers} style={{ height: "92.2vh", overflow: "hidden" }}>
        //     <div id="home" tabIndex={0} style={{ height: "92.2vh" }}>
        //         <Home />
        //     </div>
        //     <div id="projects" tabIndex={1} style={{ height: "92.2vh" }}>
        //         <Projects />
        //     </div>

        // </div>
        <div>
            <Home />
            <Projects />
            <About />
        </div>
    );
};

export default Main;
