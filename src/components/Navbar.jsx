import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const NavButton = ({ to, text }) => (
  <li className="nav-item">
    <NavLink to={to} className="nav-link" activeclassname="active">
      {text}
    </NavLink>
  </li>
);

const Logo = () => {
  return <img src="/src/assets/logo.jpg" alt="Logo" className="logo" />;
};

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="language-switcher"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="btn btn-dark">🌍</button>
      {isOpen && (
        <ul className="dropdown-menu show">
          <li>
            <NavLink className="dropdown-item" to="#">
              Қазақша
            </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item" to="#">
              Русский
            </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item" to="#">
              English
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <Logo />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <NavButton to="/insights" text="Insights" />
            <NavButton to="/industries" text="Industries" />
            <NavButton to="/services" text="Services" />
            <NavButton to="/careers" text="Careers" />
            <NavButton to="/news" text="News" />
          </ul>
          <ul className="navbar-nav ms-auto">
            <NavButton to="/about" text="About" />
            <NavButton to="/contact" text="Contact" />
            <NavButton to="/investors" text="Investors" />
          </ul>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
