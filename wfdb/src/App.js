import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MapPage from "./pages/MapPage";
import AboutPage from "./pages/AboutPage";
import Navigation from "./components/Navigation";


function App() {
  return (
    <Router>
      <div className="h-screen app">
        <Navigation />
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