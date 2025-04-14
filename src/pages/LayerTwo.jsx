import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import AuditSection from "../components/TextBox";
import InfoCard from "../components/AuditInfo";
import pic1 from "../assets/pic1.jpg";
import "../styles/LayerOne.css";
import LayerInfo from "../components/LayerInfo";

function LayerTwo() {
  const { t } = useTranslation('layertwo');

  const auditSections = [
    {
      key: "identification",
      title: t("identification_vulnerabilities"),
      content: (
        <div className="section-content">
          <h3 className="section-title">{t("identification_vulnerabilities")}</h3>
          <p className="section-description">{t("vulnerability_analysis_description")}</p>
          <ul className="feature-list">
            <motion.li 
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="feature-icon">✓</div>
              <div>
                <strong>{t("regular_scan")}</strong>
                <p>{t("automated_and_manual_analysis")}</p>
              </div>
            </motion.li>
            <motion.li 
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="feature-icon">✓</div>
              <div>
                <strong>{t("current_protection_assessment")}</strong>
                <p>{t("analysis_of_malware_protection")}</p>
              </div>
            </motion.li>
            <motion.li 
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="feature-icon">✓</div>
              <div>
                <strong>{t("risk_prioritization")}</strong>
                <p>{t("classification_of_vulnerabilities")}</p>
              </div>
            </motion.li>
            <motion.li 
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="feature-icon">✓</div>
              <div>
                <strong>{t("recommendations_for_resolution")}</strong>
                <p>{t("detailed_instructions")}</p>
              </div>
            </motion.li>
          </ul>
        </div>
      ),
    },
    {
      key: "pen testing",
      title: t("pen_testing"),
      content: (
        <div className="section-content">
          <h3 className="section-title">{t("pen_testing")}</h3>
          <p className="section-description">{t("pen_testing_description")}</p>
          <ul className="feature-list">
            <motion.li 
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="feature-icon">➤</div>
              <div>
                <strong>{t("attack_simulation")}</strong>
                <p>{t("methods_used_by_hackers")}</p>
              </div>
            </motion.li>
            <motion.li 
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="feature-icon">➤</div>
              <div>
                <strong>{t("detailed_reports")}</strong>
                <p>{t("detailed_description_of_attacks")}</p>
              </div>
            </motion.li>
            <motion.li 
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="feature-icon">➤</div>
              <div>
                <strong>{t("internal_and_external_testing")}</strong>
                <p>{t("testing_internal_networks")}</p>
              </div>
            </motion.li>
            <motion.li 
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="feature-icon">➤</div>
              <div>
                <strong>{t("security_improvement")}</strong>
                <p>{t("developing_security_strategy")}</p>
              </div>
            </motion.li>
          </ul>
        </div>
      ),
    },
    {
      key: "test",
      title: t("compliance_testing"),
      content: (
        <div className="section-content">
          <h3 className="section-title">{t("compliance_testing")}</h3>
          <p className="section-description">{t("compliance_testing_description")}</p>
          <ul className="feature-list">
            <motion.li 
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="feature-icon">🛡️</div>
              <div>
                <strong>{t("iso_gdpr_hipaa_compliance")}</strong>
                <p>{t("analysis_of_processes")}</p>
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
                <strong>{t("security_policy_assessment")}</strong>
                <p>{t("checking_policy_compliance")}</p>
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
                <strong>{t("certification_preparation")}</strong>
                <p>{t("help_with_certification_documents")}</p>
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
                <strong>{t("employee_training")}</strong>
                <p>{t("conduct_training_on_compliance")}</p>
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
        title={t("security_and_pen_testing")}
        backgroundImage="https://inova.kz/wp-content/uploads/2023/05/wall_4_3-1.png"
        breadcrumbs={[{ label: t("security_and_pen_testing") }]}
      />

      <div className="container">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-block"
        >
          <AuditSection
            title={t("security_and_pen_testing")}
            paragraphs={[
              t("comprehensive_audits_and_testing"),
              t("identifying_vulnerabilities_and_solutions"),
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

export default LayerTwo;