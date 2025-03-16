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
      <div className="navbar-title mx-auto fw-bold fs-4">
        <NavLink to="/" className="text-decoration-none text-dark">
          Shielded Networks
        </NavLink>
      </div>

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
            <NavButton to="/insights" text="Проекты" />
            <NavButton to="/services" text="Услуги" />
            <NavButton to="/news" text="Статьи" />
          </ul>
          <ul className="navbar-nav ms-auto">
            <NavButton to="/about" text="О компании" />
            <NavButton to="/contact" text="Контакты" />
            <NavButton to="/investors" text="Партнеры" />
          </ul>
          <NavLink to="/request" className="btn btn-danger ms-3">
            Оставить заявку
          </NavLink>
          <div className="ms-3">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
