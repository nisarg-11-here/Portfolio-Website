import './App.css';
import { Route, Routes } from "react-router-dom";
import Main from './Components/Main';
import CollapsableNavbar from './Components/CollapsableNavbar';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import { Footer } from './Components/Footer';
import "./Components/Footer.css";
import { Analytics } from '@vercel/analytics/react';

function App() {

    return (
      <div>
            <CollapsableNavbar />
          
            <Footer  />
            <Analytics />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/Project" element={<Projects />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
      </div>
    );
}

export default App;
