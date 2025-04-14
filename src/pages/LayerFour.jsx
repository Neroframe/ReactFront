import { motion } from "framer-motion";
import AuditSection from "../components/TextBox";
import InfoCard from "../components/AuditInfo";
import pic1 from "../assets/pic1.jpg";
import "../styles/LayerOne.css";
import LayerInfo from "../components/LayerInfo";
import { useTranslation } from "react-i18next";

function LayerFour() {
  const { t } = useTranslation('layerfour');

  const auditSections = [
    {
      key: "monitoring",
      title: t("monitoring.title"),
      content: (
        <div className="section-content">
          <h3 className="section-title">{t("monitoring.title")}</h3>
          <p className="section-description">{t("monitoring.description")}</p>
          <ul className="feature-list">
            <motion.li
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="feature-icon">📱</div>
              <div>
                <strong>{t("monitoring.device_tracking")}</strong>
                <p>{t("monitoring.device_tracking_description")}</p>
              </div>
            </motion.li>
            <motion.li
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="feature-icon">🛡️</div>
              <div>
                <strong>{t("monitoring.security_management")}</strong>
                <p>{t("monitoring.security_management_description")}</p>
              </div>
            </motion.li>
            <motion.li
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="feature-icon">⚡</div>
              <div>
                <strong>{t("monitoring.real_time_attack_prevention")}</strong>
                <p>{t("monitoring.real_time_attack_prevention_description")}</p>
              </div>
            </motion.li>
          </ul>
        </div>
      ),
    },
    {
      key: "usage",
      title: t("usage.title"),
      content: (
        <div className="section-content">
          <h3 className="section-title">{t("usage.title")}</h3>
          <p className="section-description">{t("usage.description")}</p>
          <ul className="feature-list">
            <motion.li
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="feature-icon">👨‍💼</div>
              <div>
                <strong>{t("usage.role_based_access")}</strong>
                <p>{t("usage.role_based_access_description")}</p>
              </div>
            </motion.li>
            <motion.li
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="feature-icon">🔐</div>
              <div>
                <strong>{t("usage.two_factor_authentication")}</strong>
                <p>{t("usage.two_factor_authentication_description")}</p>
              </div>
            </motion.li>
            <motion.li
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="feature-icon">🔏</div>
              <div>
                <strong>{t("usage.data_encryption")}</strong>
                <p>{t("usage.data_encryption_description")}</p>
              </div>
            </motion.li>
          </ul>
        </div>
      ),
    },
    {
      key: "incidents",
      title: t("incidents.title"),
      content: (
        <div className="section-content">
          <h3 className="section-title">{t("incidents.title")}</h3>
          <p className="section-description">{t("incidents.description")}</p>
          <ul className="feature-list">
            <motion.li
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="feature-icon">🛡️</div>
              <div>
                <strong>{t("incidents.ips_ids_systems")}</strong>
                <p>{t("incidents.ips_ids_systems_description")}</p>
              </div>
            </motion.li>
            <motion.li
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="feature-icon">🤖</div>
              <div>
                <strong>{t("incidents.automated_response_tools")}</strong>
                <p>{t("incidents.automated_response_tools_description")}</p>
              </div>
            </motion.li>
            <motion.li
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="feature-icon">🚨</div>
              <div>
                <strong>{t("incidents.real_time_alerts")}</strong>
                <p>{t("incidents.real_time_alerts_description")}</p>
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
            title={t("endpoint_security.title")}
            paragraphs={[t("endpoint_security.text1")]}
            imageURL={pic1}
            imageAlt="audit"
          />
        </motion.div>

        <InfoCard sections={auditSections} />
      </div>
    </motion.div>
  );
}

export default LayerFour;