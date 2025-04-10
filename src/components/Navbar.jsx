import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import { useTranslation } from "react-i18next";

const NavButton = ({ to, translationKey, onClick }) => {
  const { t } = useTranslation("navbar");
  return (
    <li className="nav-item">
      <NavLink
        to={to}
        className="nav-link"
        activeclassname="active"
        onClick={onClick}
      >
        {t(translationKey)}
      </NavLink>
    </li>
  );
};

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
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

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
            <button className="dropdown-item" onClick={() => changeLanguage("kz")}>
              Қазақша
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => changeLanguage("ru")}>
              Русский
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => changeLanguage("en")}>
              English
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToServices: true }, replace: true });
    } else {
      document.getElementById("services-section")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand" onClick={scrollToTop}>
          <Logo scrollToTop={scrollToTop} />
        </NavLink>

        <div className="navbar-title">
          <NavLink
            to="/"
            className="text-decoration-none text-dark fw-bold fs-4"
            onClick={scrollToTop}
          >
            Shielded Networks
          </NavLink>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav me-auto">
            <NavButton to="/insights" translationKey="nav.projects" onClick={scrollToTop} />
            <NavButton to="/" translationKey="nav.services" onClick={handleServicesClick} />
            <NavButton to="/news" translationKey="nav.articles" onClick={scrollToTop} />
          </ul>
          <ul className="navbar-nav ms-auto">
            <NavButton to="/about" translationKey="nav.about" onClick={scrollToTop} />
            <NavButton to="/contact" translationKey="nav.contact" onClick={scrollToTop} />
            <NavButton to="/partners" translationKey="nav.partners" onClick={scrollToTop} />
          </ul>
          <NavLink to="/request" className="btn btn-danger ms-3" onClick={scrollToTop}>
            {t("nav.request")}
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
