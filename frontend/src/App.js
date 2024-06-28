import './App.css';
import { Route, Routes } from "react-router-dom";
import Main from './Components/Main';
import CollapsableNavbar from './Components/CollapsableNavbar';

function App() {
    return (
      <div>
            <CollapsableNavbar />
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
      </div>
    );
}

export default App;
