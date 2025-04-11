import React from "react";
import "../styles/About.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("about"); // uses "about.json" namespace

  return (
    <div className="about-container">
      <header className="about-header">
        <h1>
          {t("companyTitle")}{" "}
          <span className="highlight">{t("")}</span>
        </h1>
        <p>{t("companySubtitle")}</p>
      </header>

      <section className="about-mission">
        <div className="about-content">
          <h2>{t("missionTitle")}</h2>
          <p>{t("missionText")}</p>
        </div>
        <img
          src="/src/assets/security-mission.jpg"
          alt={t("missionImageAlt")}
        />
      </section>

      <section className="about-history">
        <img src="/src/assets/history.jpg" alt={t("historyImageAlt")} />
        <div className="about-content">
          <h2>{t("historyTitle")}</h2>
          <p>{t("historyText")}</p>
        </div>
      </section>

      <section className="about-team">
        <h2>{t("teamTitle")}</h2>
        <div className="team-grid">
          <div className="team-member">
            <img
              src="/src/assets/team/adilet.jpg"
              alt={t("team.member1.name")}
            />
            <h3>{t("team.member1.name")}</h3>
            <p>{t("team.member1.desc")}</p>
          </div>
          <div className="team-member">
            <img
              src="/src/assets/team/bagdar.jpg"
              alt={t("team.member2.name")}
            />
            <h3>{t("team.member2.name")}</h3>
            <p>{t("team.member2.desc")}</p>
          </div>
          <div className="team-member">
            <img src="/src/assets/team/you.jpg" alt={t("team.member3.name")} />
            <h3>{t("team.member3.name")}</h3>
            <p>{t("team.member3.desc")}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
