import { motion } from "framer-motion";
import AuditSection from "../components/TextBox";
import InfoCard from "../components/AuditInfo";
import pic1 from "../assets/pic1.jpg";
import "../styles/LayerOne.css";
import LayerInfo from "../components/LayerInfo";
import { useTranslation } from "react-i18next";

function LayerThree() {
  const { t } = useTranslation('layerthree');

  const auditSections = [
    {
      key: "certification",
      title: t("certification.title"),
      content: (
        <div className="section-content">
          <h3 className="section-title">{t("certification.title")}</h3>
          <p className="section-description">
            <strong>{t("certification.description")}</strong>
            <br />
            {t("certification.text1")}
          </p>
          
          <h4 className="section-subtitle">{t("certification.features_title")}</h4>
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
                <div>{t(`certification.feature${i}`)}</div>
              </motion.li>
            ))}
          </ul>

          <h4 className="section-subtitle">{t("certification.certifications_title")}</h4>
          <ul className="feature-list">
            <motion.li 
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="feature-icon">🎓</div>
              <div>
                <strong>{t("certification.CISSP")}</strong>
                <p>{t("certification.CISSP_description")}</p>
              </div>
            </motion.li>
            <motion.li 
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="feature-icon">🎓</div>
              <div>
                <strong>{t("certification.CEH")}</strong>
                <p>{t("certification.CEH_description")}</p>
              </div>
            </motion.li>
            <motion.li 
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="feature-icon">🎓</div>
              <div>
                <strong>{t("certification.CompTIA_Security")}</strong>
                <p>{t("certification.CompTIA_Security_description")}</p>
              </div>
            </motion.li>
            <motion.li 
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="feature-icon">🎓</div>
              <div>
                <strong>{t("certification.CISM")}</strong>
                <p>{t("certification.CISM_description")}</p>
              </div>
            </motion.li>
          </ul>
        </div>
      ),
    },
    {
      key: "phishing",
      title: t("phishing.title"),
      content: (
        <div className="section-content">
          <h3 className="section-title">{t("phishing.title")}</h3>
          <p className="section-description">
            {t("phishing.description")}
          </p>
          
          <h4 className="section-subtitle">{t("phishing.services_title")}</h4>
          <ul className="feature-list">
            <motion.li 
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="feature-icon">📧</div>
              <div>
                <strong>{t("phishing.realistic_emails")}</strong>
                <p>{t("phishing.realistic_emails_description")}</p>
              </div>
            </motion.li>
            <motion.li 
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="feature-icon">👀</div>
              <div>
                <strong>{t("phishing.employee_reactions")}</strong>
                <p>{t("phishing.employee_reactions_description")}</p>
              </div>
            </motion.li>
            <motion.li 
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="feature-icon">🔍</div>
              <div>
                <strong>{t("phishing.weakness_identification")}</strong>
                <p>{t("phishing.weakness_identification_description")}</p>
              </div>
            </motion.li>
            <motion.li 
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="feature-icon">💡</div>
              <div>
                <strong>{t("phishing.personalized_feedback")}</strong>
                <p>{t("phishing.personalized_feedback_description")}</p>
              </div>
            </motion.li>
          </ul>
          <p className="section-footer">{t("phishing.outcome")}</p>
        </div>
      ),
    },
    {
      key: "mobile",
      title: t("mobile.title"),
      content: (
        <div className="section-content">
          <h3 className="section-title">{t("mobile.title")}</h3>
          <p className="section-description">
            {t("mobile.description")}
          </p>
          
          <h4 className="section-subtitle">{t("mobile.services_title")}</h4>
          <ul className="feature-list">
            <motion.li 
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="feature-icon">📱</div>
              <div>
                <strong>{t("mobile.training")}</strong>
                <p>{t("mobile.training_description")}</p>
              </div>
            </motion.li>
            <motion.li 
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="feature-icon">📜</div>
              <div>
                <strong>{t("mobile.policies")}</strong>
                <p>{t("mobile.policies_description")}</p>
              </div>
            </motion.li>
            <motion.li 
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="feature-icon">🔒</div>
              <div>
                <strong>{t("mobile.access_control")}</strong>
                <p>{t("mobile.access_control_description")}</p>
              </div>
            </motion.li>
            <motion.li 
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="feature-icon">🛡️</div>
              <div>
                <strong>{t("mobile.app_security")}</strong>
                <p>{t("mobile.app_security_description")}</p>
              </div>
            </motion.li>
          </ul>
          <p className="section-footer">{t("mobile.risks_reduction")}</p>
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
        title={t("training_and_security")}
        backgroundImage="https://inova.kz/wp-content/uploads/2023/05/wall_4_3-1.png"
        breadcrumbs={[{ label: t("breadcrumbs.training_and_security") }]}
      />

      <div className="container">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-block"
        >
          <AuditSection
            title={t("audit_section.title")}
            paragraphs={[
              t("audit_section.text1"),
              t("audit_section.text2"),
            ]}
            imageURL={pic1}
            imageAlt="audit"
          />
        </motion.div>

        <InfoCard sections={auditSections} />
      </div>
    </motion.div>
  );
}

export default LayerThree;