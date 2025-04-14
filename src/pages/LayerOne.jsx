import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import AuditSection from "../components/TextBox";
import InfoCard from "../components/AuditInfo";
import pic1 from "../assets/pic1.jpg";
import "../styles/LayerOne.css";
import LayerInfo from "../components/LayerInfo";

function LayerOne() {
  const { t } = useTranslation('layerone');

  const auditSections = [
    {
      key: "risks",
      title: t("layer1.risks.title"),
      content: (
        <div className="section-content">
          <h3 className="section-title">{t("layer1.risks.title")}</h3>
          <p className="section-description">{t("layer1.risks.intro")}</p>
          <ul className="feature-list">
            {[1, 2, 3].map((i) => (
              <motion.li 
                key={i} 
                className="feature-item"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="feature-icon">✓</div>
                <div>
                  <strong>{t(`layer1.risks.point${i}.title`)}</strong>
                  <p>{t(`layer1.risks.point${i}.text`)}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      key: "developmentStrategies",
      title: t("layer1.developmentStrategies.title"),
      content: (
        <div className="section-content">
          <h3 className="section-title">{t("layer1.developmentStrategies.title")}</h3>
          <p className="section-description">{t("layer1.developmentStrategies.intro")}</p>
          <ul className="feature-list">
            {[1, 2, 3].map((i) => (
              <motion.li 
                key={i} 
                className="feature-item"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="feature-icon">➤</div>
                <div>
                  <strong>{t(`layer1.developmentStrategies.point${i}.title`)}</strong>
                  <p>{t(`layer1.developmentStrategies.point${i}.text`)}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      key: "recovery",
      title: t("layer1.recovery.title"),
      content: (
        <div className="section-content">
          <h3 className="section-title">{t("layer1.recovery.title")}</h3>
          <p className="section-description">{t("layer1.recovery.intro")}</p>
          <ul className="feature-list">
            {[1, 2, 3].map((i) => (
              <motion.li 
                key={i} 
                className="feature-item"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="feature-icon">🛡️</div>
                <div>
                  <strong>{t(`layer1.recovery.point${i}.title`)}</strong>
                  <p>{t(`layer1.recovery.point${i}.text`)}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <LayerInfo
        title={t("layer1.title")}
        backgroundImage="https://inova.kz/wp-content/uploads/2023/05/wall_4_3-1.png"
        breadcrumbs={[{ label: t("layer1.title") }]}
      />

      <div className="container">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <AuditSection
            title={t("layer1.auditSectionTitle")}
            paragraphs={[t("layer1.auditSectionText")]}
            imageURL={pic1}
            imageAlt="audit"
          />
        </motion.div>

        <InfoCard sections={auditSections} />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="cta-section"
        >
          <h3>{t("layer1.cta.title")}</h3>
          <p>{t("layer1.cta.description")}</p>
          <button className="button">{t("layer1.cta.button")}</button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default LayerOne;