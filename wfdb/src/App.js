import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MapPage from "./pages/MapPage";
import AboutPage from "./pages/AboutPage";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="h-screen app">
        <div className="bg-sky-900 flex items-center px-4">
          <div className="flex-1">
          <img src="WFDB-logo.png" alt="Logo" className="w-32" />
          </div>
          <ul className="flex gap-2">
            <li className="p-2 bg-sky-700 rounded text-white hover:bg-amber-600">
              <Link to="/">Alertas de 48hs</Link>
            </li>
            <li className="p-2 bg-sky-700 rounded text-white hover:bg-amber-600">
              <Link to="/about">Sobre a Ferramenta</Link>
            </li>
          </ul>
        </div>
        <main>
          <Routes>
            <Route exact path="/" element={<MapPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
