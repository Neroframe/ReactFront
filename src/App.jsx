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
import Footer from "./components/Footer";
import LayerOne from "./pages/LayerOne";
import LayerTwo from "./pages/LayerTwo";
import LayerThree from "./pages/LayerThree";
import LayerFour from "./pages/LayerFour";
import LayerFive from "./pages/LayerFive";
import LayerSix from "./pages/LayerSix";


function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          {/* Navbar */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Faces" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/news" element={<News />} />
          <Route path="/services" element={<Services />} />
          <Route path="/request" element={<RequestPage />} />
          {/* Layering */}
          <Route path="/LayerOne" element={<LayerOne />} />
          <Route path="/LayerTwo" element={<LayerTwo />} />
          <Route path="/LayerThree" element={<LayerThree />} />
          <Route path="/LayerFour" element={<LayerFour />} />
          <Route path="/LayerFive" element={<LayerFive />} />
          <Route path="/LayerSix" element={<LayerSix />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
