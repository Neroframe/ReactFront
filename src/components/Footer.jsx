import React from "react";
import "../styles/Footer.css";
import { useTranslation } from "react-i18next";

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
          <a
            href="https://go.2gis.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {t("footer.mapLink")}
          </a>
        </div>

        {/* Правая часть футера */}
        <div className="right">
          <div className="icons">
            <a
              href="https://wa.me/77771234567"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              {t("footer.whatsapp")}
            </a>
            <a
              href="https://instagram.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              {t("footer.instagram")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
