import React from "react";
import "../styles/Footer.css";
import { useTranslation } from "react-i18next";
import gisIcon from "../assets/2gis.png";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation("footer");

  return (
    <footer className="footer">
      <div className="container">
        {/* Левая часть футера */}
        <div className="left">
          <p className="title">{t("footer.contactsTitle")}</p>
          <p>📍 {t("footer.address")}</p>
          <p>📞 {t("footer.phone")}</p>
          <p>🕒 {t("footer.hours")}</p>
        </div>

        {/* Правая часть футера */}
        <div className="right">
          <div className="icons">
            <a
              href="https://wa.me/77771234567"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={28} />
            </a>
            <a
              href="https://instagram.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="Instagram"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://go.2gis.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="2GIS"
            >
              <img src={gisIcon} alt="2GIS" className="gis-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
