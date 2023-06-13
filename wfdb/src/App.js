import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MapPage from "./pages/MapPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MapPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
