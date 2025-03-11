import React, { useState } from "react";
import "../styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Функция для кнопки навигации
const NavButton = ({ text }) => (
  <li className="nav-item">
    <a href="#" className="nav-link">
      {text}
    </a>
  </li>
);

// Функция для логотипа
const Logo = () => {
  return (
    <img 
      src="/src/assets/logo.jpg" 
      alt="Logo" 
      className="logo"
    />
  );
};

// Компонент переключения языка
const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="language-switcher"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="btn btn-dark">
        🌍
      </button>
      {isOpen && (
        <ul className="dropdown-menu show">
          <li>
            <a className="dropdown-item" href="#">Қазақша</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Русский</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">English</a>
          </li>
        </ul>
      )}
    </div>
  );
};

// Основной компонент Navbar
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container">
        <Logo />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Левая группа кнопок */}
          <ul className="navbar-nav me-auto">
            {["Insights", "Industries", "Services", "Careers", "News"].map((item) => (
              <NavButton key={item} text={item} />
            ))}
          </ul>
          {/* Правая группа кнопок */}
          <ul className="navbar-nav ms-auto">
            {["About us", "Contact us", "Investors"].map((item) => (
              <NavButton key={item} text={item} />
            ))}
          </ul>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
