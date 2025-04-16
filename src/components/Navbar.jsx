import React, { useState, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import { useTranslation } from "react-i18next";
import logo from '../assets/oglogo2.jpg';


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
      src={logo}
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
            <button
              className="dropdown-item"
              onClick={() => changeLanguage("ru")}
            >
             Русский
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => changeLanguage("en")}
            >
               English
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => changeLanguage("kz")}
            >
              Қазақша
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
  const { t } = useTranslation("navbar");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownTimeoutRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300); // Задержка для плавности
  };

  const isMobile = window.innerWidth <= 768;

  const handleServicesClick = () => {
    if (isMobile) {
      setIsDropdownOpen((prev) => !prev);
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const servicesSection = document.getElementById("services-section");
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    }

    setIsDropdownOpen(false);
    setIsMenuOpen(false);
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

        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav me-auto">
            <NavButton
              to="/insights"
              translationKey="nav.projects"
              onClick={scrollToTop}
            />

            {/* Услуги с выпадающим меню */}
            <li
              className="nav-item dropdown"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <span
                className="nav-link dropdown-toggle"
                role="button"
                onClick={handleServicesClick}
              >
                {t("nav.services")}
              </span>

              {isDropdownOpen && (
                <ul
                  className="dropdown-menu show"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <li>
                    <NavLink
                      to="/LayerOne"
                      className="dropdown-item"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      {t("nav.layer1")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/LayerTwo"
                      className="dropdown-item"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      {t("nav.layer2")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/LayerThree"
                      className="dropdown-item"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      {t("nav.layer3")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/LayerFour"
                      className="dropdown-item"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      {t("nav.layer4")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/LayerFive"
                      className="dropdown-item"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      {t("nav.layer5")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/LayerSix"
                      className="dropdown-item"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      {t("nav.layer6")}
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <NavButton
              to="/news"
              translationKey="nav.articles"
              onClick={scrollToTop}
            />
          </ul>

          <ul className="navbar-nav ms-auto">
            <NavButton
              to="/about"
              translationKey="nav.about"
              onClick={scrollToTop}
            />
            <NavButton
              to="/contact"
              translationKey="nav.contact"
              onClick={scrollToTop}
            />
            <NavButton
              to="/partners"
              translationKey="nav.partners"
              onClick={scrollToTop}
            />
          </ul>

          <div className="navbar-button ms-3">
            <NavLink
              to="/request"
              className="btn btn-danger"
              onClick={scrollToTop}
            >
              {t("nav.request")}
            </NavLink>
          </div>

          <div className="ms-3">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
