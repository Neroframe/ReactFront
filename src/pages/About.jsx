import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../styles/About.css";

const About = () => {
  const { t } = useTranslation("about");

  // Анимация для секций
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Анимация для членов команды
  const teamMemberVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.15, duration: 0.5 }
    })
  };

  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.header 
        className="about-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1>
          {t("companyTitle")}{" "}
          <span className="highlight">{t("")}</span>
        </h1>
        <p>{t("companySubtitle")}</p>
      </motion.header>

      <motion.section 
        className="about-mission"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="about-content">
          <h2>{t("missionTitle")}</h2>
          <p>{t("missionText")}</p>
        </div>
        <motion.img
          src="/src/assets/security-mission.jpg"
          alt={t("missionImageAlt")}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        />
      </motion.section>

      <motion.section 
        className="about-history"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.img 
          src="/src/assets/history.jpg" 
          alt={t("historyImageAlt")}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        />
        <div className="about-content">
          <h2>{t("historyTitle")}</h2>
          <p>{t("historyText")}</p>
        </div>
      </motion.section>

      <motion.section 
        className="about-team"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <h2>{t("teamTitle")}</h2>
        <div className="team-grid">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="team-member"
              variants={teamMemberVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <img
                src={`/src/assets/team/${i === 1 ? 'adilet' : i === 2 ? 'bagdar' : 'you'}.jpg`}
                alt={t(`team.member${i}.name`)}
              />
              <h3>{t(`team.member${i}.name`)}</h3>
              <p>{t(`team.member${i}.desc`)}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default About;