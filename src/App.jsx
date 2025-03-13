import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Faces";
import Contact from "./pages/Contact";
import Insights from "./pages/Insights";
import Investors from "./pages/Investors";
import News from "./pages/News";
import Services from "./pages/Services";
import RequestPage from "./pages/RequestPage"; // Импортируем страницу
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Faces" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/news" element={<News />} />
        <Route path="/services" element={<Services />} />
        <Route path="/request" element={<RequestPage />} /> {/* Добавил маршрут */}
      </Routes>
    </Router>
  );
}

export default App;