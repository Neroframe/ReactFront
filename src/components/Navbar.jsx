import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const NavButton = ({ to, text, onClick }) => (
  <li className="nav-item">
    <NavLink
      to={to}
      className="nav-link"
      activeclassname="active"
      onClick={onClick}
    >
      {text}
    </NavLink>
  </li>
);

const Logo = ({ scrollToTop }) => {
  return (
    <img
      src="/src/assets/logo.jpg"
      alt="Logo"
      className="logo"
      onClick={scrollToTop}
    />
  );
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
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false); // Закрываем меню при клике
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false); // Закрываем меню при клике

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToServices: true }, replace: true });
    } else {
      document
        .getElementById("services-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container-fluid">
        {/* Логотип */}
        <NavLink to="/" className="navbar-brand" onClick={scrollToTop}>
          <Logo scrollToTop={scrollToTop} />
        </NavLink>
        
         {/* Заголовок */}
         <div className="navbar-title">
          <NavLink 
            to="/" 
            className="text-decoration-none text-dark fw-bold fs-4" 
            onClick={scrollToTop}
          >
            Shielded Networks
          </NavLink>
        </div>

        {/* Бургер-меню */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav me-auto">
            <NavButton to="/insights" text="Проекты" onClick={scrollToTop} />
            <NavButton to="/" text="Услуги" onClick={handleServicesClick} />
            <NavButton to="/news" text="Статьи" onClick={scrollToTop} />
          </ul>
          <ul className="navbar-nav ms-auto">
            <NavButton to="/about" text="О компании" onClick={scrollToTop} />
            <NavButton to="/contact" text="Контакты" onClick={scrollToTop} />
            <NavButton to="/partners" text="Партнеры" onClick={scrollToTop} />
          </ul>
          <NavLink
            to="/request"
            className="btn btn-danger ms-3"
            onClick={scrollToTop}
          >
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