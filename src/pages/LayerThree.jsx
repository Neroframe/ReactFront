import AuditSection from "../components/TextBox";
import InfoCard from "../components/AuditInfo";
import pic1 from "../assets/pic1.jpg";
import "../styles/LayerOne.css";
import LayerInfo from "../components/LayerInfo";
import { useTranslation } from "react-i18next"; // Импорт функции перевода


function LayerOne() {
  const { t } = useTranslation('layerthree'); // Указываем конкретный namespace
  
  const auditSections = [
    {
      key: "certification",
      title: t("certification.title"),
      content: (
        <p>
          <strong>{t("certification.description")}</strong>
          <br />
          {t("certification.text1")}
          <ul>
            <li>
              <strong>{t("certification.CISSP")}</strong>: {t("certification.CISSP_description")}
            </li>
            <li>
              <strong>{t("certification.CEH")}</strong>: {t("certification.CEH_description")}
            </li>
            <li>
              <strong>{t("certification.CompTIA_Security")}</strong>: {t("certification.CompTIA_Security_description")}
            </li>
            <li>
              <strong>{t("certification.CISM")}</strong>: {t("certification.CISM_description")}
            </li>
          </ul>
          {t("certification.features_title")}
          <ul>
            <li>{t("certification.interactive_sessions")}</li>
            <li>{t("certification.adapted_courses")}</li>
            <li>{t("certification.course_updates")}</li>
          </ul>
        </p>
      ),
    },
    {
      key: "phishing",
      title: t("phishing.title"),
      content: (
        <p>
          <strong>{t("phishing.title")}</strong>
          <br />
          {t("phishing.description")}
          <br /><br />
          {t("phishing.services_title")}
          <ul>
            <li>
              <strong>{t("phishing.realistic_emails")}</strong>: {t("phishing.realistic_emails_description")}
            </li>
            <li>
              <strong>{t("phishing.employee_reactions")}</strong>: {t("phishing.employee_reactions_description")}
            </li>
            <li>
              <strong>{t("phishing.weakness_identification")}</strong>: {t("phishing.weakness_identification_description")}
            </li>
            <li>
              <strong>{t("phishing.personalized_feedback")}</strong>: {t("phishing.personalized_feedback_description")}
            </li>
          </ul>
          {t("phishing.outcome")}
        </p>
      ),
    },
    {
      key: "mobile",
      title: t("mobile.title"),
      content: (
        <p>
          <strong>{t("mobile.title")}</strong>
          <br />
          {t("mobile.description")}
          <br /><br />
          {t("mobile.services_title")}
          <ul>
            <li>
              <strong>{t("mobile.training")}</strong>: {t("mobile.training_description")}
            </li>
            <li>
              <strong>{t("mobile.policies")}</strong>: {t("mobile.policies_description")}
            </li>
            <li>
              <strong>{t("mobile.access_control")}</strong>: {t("mobile.access_control_description")}
            </li>
            <li>
              <strong>{t("mobile.app_security")}</strong>: {t("mobile.app_security_description")}
            </li>
          </ul>
          {t("mobile.risks_reduction")}
        </p>
      ),
    },
  ];

  return (
    <div>
      <LayerInfo
        title={t("training_and_security")}
        backgroundImage="https://inova.kz/wp-content/uploads/2023/05/wall_4_3-1.png"
        breadcrumbs={[{ label: t("breadcrumbs.training_and_security") }]}
      />
      <AuditSection
        title={t("audit_section.title")}
        paragraphs={[
          t("audit_section.text1"),
          t("audit_section.text2"),
        ]}
        imageURL={pic1}
        imageAlt="audit"
      />

      {/* Передача секций в InfoCard (AuditInfo) */}
      <InfoCard sections={auditSections} />
    </div>
  );
}

export default LayerOne;
