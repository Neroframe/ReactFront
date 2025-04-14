import { motion } from "framer-motion";
import AuditSection from "../components/TextBox";
import InfoCard from "../components/AuditInfo";
import pic1 from "../assets/pic1.jpg";
import "../styles/LayerOne.css";
import LayerInfo from "../components/LayerInfo";
import { useTranslation } from "react-i18next";

function LayerFive() {
  const { t } = useTranslation('layerfive');

  const auditSections = [
    {
      key: "risks",
      title: t("risks.title"),
      content: (
        <div className="section-content">
          <h3 className="section-title">{t("risks.title")}</h3>
          <p className="section-description">{t("risks.description")}</p>
          <ul className="feature-list">
            <motion.li
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="feature-icon">🔍</div>
              <div>
                <strong>{t("risks.threat_analysis")}</strong>
                <p>{t("risks.threat_analysis_description")}</p>
              </div>
            </motion.li>
            <motion.li
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="feature-icon">📊</div>
              <div>
                <strong>{t("risks.impact_assessment")}</strong>
                <p>{t("risks.impact_assessment_description")}</p>
              </div>
            </motion.li>
            <motion.li
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="feature-icon">🛡️</div>
              <div>
                <strong>{t("risks.risk_mitigation")}</strong>
                <p>{t("risks.risk_mitigation_description")}</p>
              </div>
            </motion.li>
          </ul>
        </div>
      ),
    },
    {
      key: "developmentStrategies",
      title: t("developmentStrategies.title"),
      content: (
        <div className="section-content">
          <h3 className="section-title">{t("developmentStrategies.title")}</h3>
          <p className="section-description">{t("developmentStrategies.description")}</p>
          <ul className="feature-list">
            <motion.li
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="feature-icon">⚠️</div>
              <div>
                <strong>{t("developmentStrategies.critical_services")}</strong>
                <p>{t("developmentStrategies.critical_services_description")}</p>
              </div>
            </motion.li>
            <motion.li
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="feature-icon">🏠</div>
              <div>
                <strong>{t("developmentStrategies.remote_work")}</strong>
                <p>{t("developmentStrategies.remote_work_description")}</p>
              </div>
            </motion.li>
            <motion.li
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="feature-icon">💾</div>
              <div>
                <strong>{t("developmentStrategies.backups")}</strong>
                <p>{t("developmentStrategies.backups_description")}</p>
              </div>
            </motion.li>
          </ul>
        </div>
      ),
    },
    {
      key: "recovery",
      title: t("recovery.title"),
      content: (
        <div className="section-content">
          <h3 className="section-title">{t("recovery.title")}</h3>
          <p className="section-description">{t("recovery.description")}</p>
          <ul className="feature-list">
            <motion.li
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="feature-icon">🔄</div>
              <div>
                <strong>{t("recovery.regular_backups")}</strong>
                <p>{t("recovery.regular_backups_description")}</p>
              </div>
            </motion.li>
            <motion.li
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="feature-icon">⏱️</div>
              <div>
                <strong>{t("recovery.recovery_time")}</strong>
                <p>{t("recovery.recovery_time_description")}</p>
              </div>
            </motion.li>
            <motion.li
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="feature-icon">☁️</div>
              <div>
                <strong>{t("recovery.cloud_recovery")}</strong>
                <p>{t("recovery.cloud_recovery_description")}</p>
              </div>
            </motion.li>
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
        title={t("layer_title")}
        backgroundImage="https://inova.kz/wp-content/uploads/2023/05/wall_4_3-1.png"
        breadcrumbs={[{ label: t("breadcrumbs.layer_title") }]}
      />

      <div className="container">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-block"
        >
          <AuditSection
            title={t("bcdr_planning.title")}
            paragraphs={[t("bcdr_planning.text")]}
            imageURL={pic1}
            imageAlt="audit"
          />
        </motion.div>

        <InfoCard sections={auditSections} />
      </div>
    </motion.div>
  );
}

export default LayerFive;