import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/src/assets/logo.jpg" alt="Logo" className="logo" />
        <ul className="nav-links">
          <li><a href="#">Insights</a></li>
          <li><a href="#">Industries</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">About us</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="#">Contact us</a>
        <a href="#">Investors</a>
        <div className="language-switch">
          <span>Global | EN 🌐</span>
        </div>
        <button className="search-btn">🔍</button>
      </div>
    </nav>
  );
};

export default Navbar;
