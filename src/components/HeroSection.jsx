import React from "react";
import "../styles/HeroSection.css";
import { useTranslation } from "react-i18next";

function HeroSection() {
  const { t } = useTranslation("hero"); // Обязательно укажи "hero"

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{t("title")}</h1>
        <p>{t("subtitle")}</p>
      </div>
    </section>
  );
}

export default HeroSection;
