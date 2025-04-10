import { useTranslation } from "react-i18next"; // Импорт функции перевода
import AuditSection from "../components/TextBox";
import InfoCard from "../components/AuditInfo";
import pic1 from "../assets/pic1.jpg";
import "../styles/LayerOne.css";
import LayerInfo from "../components/LayerInfo";

function LayerOne() {
  const { t } = useTranslation('layertwo'); // Указываем конкретный namespace
  
  const auditSections = [
    {
      key: "identification",
      title: t("identification_vulnerabilities"), // Используем ключ для перевода
      content: (
        <p>
          <strong>{t("identification_vulnerabilities")}</strong>
          <br></br>
          <br></br>
          {t("vulnerability_analysis_description")}
          <br></br>
          <br></br>
          <ul>
            <li>
              <strong>{t("regular_scan")}</strong>: {t("automated_and_manual_analysis")}
            </li>
            <li>
              <strong>{t("current_protection_assessment")}</strong>: {t("analysis_of_malware_protection")}
            </li>
            <li>
              <strong>{t("risk_prioritization")}</strong>: {t("classification_of_vulnerabilities")}
            </li>
            <li>
              <strong>{t("recommendations_for_resolution")}</strong>: {t("detailed_instructions")}
            </li>
          </ul>
        </p>
      ),
    },
    {
      key: "pen testing",
      title: t("pen_testing"),
      content: (
        <p>
          <strong>{t("pen_testing_description")}</strong>
          <br></br>
          <br></br>
          {t("pen_testing_explanation")}
          <br></br>
          <br></br>
          <ul>
            <li>
              <strong>{t("attack_simulation")}</strong>: {t("methods_used_by_hackers")}
            </li>
            <li>
              <strong>{t("detailed_reports")}</strong>: {t("detailed_description_of_attacks")}
            </li>
            <li>
              <strong>{t("internal_and_external_testing")}</strong>: {t("testing_internal_networks")}
            </li>
            <li>
              <strong>{t("security_improvement")}</strong>: {t("developing_security_strategy")}
            </li>
          </ul>
        </p>
      ),
    },
    {
      key: "test",
      title: t("compliance_testing"),
      content: (
        <p>
          <strong>{t("compliance_testing_description")}</strong>
          <br></br>
          <br></br>
          {t("importance_of_compliance")}
          <br></br>
          <br></br>
          <ul>
            <li>
              <strong>{t("iso_gdpr_hipaa_compliance")}</strong>: {t("analysis_of_processes")}
            </li>
            <li>
              <strong>{t("security_policy_assessment")}</strong>: {t("checking_policy_compliance")}
            </li>
            <li>
              <strong>{t("certification_preparation")}</strong>: {t("help_with_certification_documents")}
            </li>
            <li>
              <strong>{t("employee_training")}</strong>: {t("conduct_training_on_compliance")}
            </li>
          </ul>
        </p>
      ),
    },
  ];

  return (
    <div>
      <LayerInfo
        title={t("security_and_pen_testing")} // Перевод заголовка
        backgroundImage="https://inova.kz/wp-content/uploads/2023/05/wall_4_3-1.png"
        breadcrumbs={[{ label: t("security_and_pen_testing") }]} // Перевод хлебных крошек
      />
      <AuditSection
        title={t("security_and_pen_testing")} // Перевод заголовка
        paragraphs={[
          t("comprehensive_audits_and_testing"),
          t("identifying_vulnerabilities_and_solutions"),
        ]}
        imageURL={pic1}
        imageAlt="audit"
      />

      <InfoCard sections={auditSections} />
    </div>
  );
}

export default LayerOne;
