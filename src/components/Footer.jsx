import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Левая часть футера */}
        <div className="left">
          <p className="title">Наши контакты:</p>
          <p>📍 Адрес: г. Астана, ул. Примерная, 10</p>
          <p>📞 Телефон: +7 (777) 123-45-67</p>
          <p>🕒 Время работы: Пн-Пт, 09:00 - 18:00</p>
          <a
            href="https://go.2gis.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Открыть в 2GIS
          </a>
        </div>

        {/* Правая часть футера */}
        <div className="right">
          <div className="icons">
            <a href="https://wa.me/77771234567" target="_blank" rel="noopener noreferrer" className="icon-link">
              WhatsApp
            </a>
            <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer" className="icon-link">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}