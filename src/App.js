import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/homepage/Homepage';
import SportsPage from './pages/sports/SportsPage';
import SciencePage from './pages/science/SciencePage';
import Technology from "./pages/technology/Technology";

function App() {
  return (
    <div className="APP">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/sports" element={<SportsPage />} />
          <Route path="/science" element={<SciencePage />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
