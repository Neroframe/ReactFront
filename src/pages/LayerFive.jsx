import AuditSection from "../components/TextBox";
import InfoCard from "../components/AuditInfo";
import pic1 from "../assets/pic1.jpg";
import "../styles/LayerOne.css";
import LayerInfo from "../components/LayerInfo";
import { useTranslation } from "react-i18next";

function LayerFive() {
  const { t } = useTranslation('layerfive'); // Указываем namespace

  const auditSections = [
    {
      key: "risks",
      title: t("risks.title"),
      content: (
        <p>
          <strong>{t("risks.title")}</strong>
          <br />
          {t("risks.description")}
          <ul>
            <li>
              <strong>{t("risks.threat_analysis")}</strong>: {t("risks.threat_analysis_description")}
            </li>
            <li>
              <strong>{t("risks.impact_assessment")}</strong>: {t("risks.impact_assessment_description")}
            </li>
            <li>
              <strong>{t("risks.risk_mitigation")}</strong>: {t("risks.risk_mitigation_description")}
            </li>
          </ul>
        </p>
      ),
    },
    {
      key: "developmentStrategies",
      title: t("developmentStrategies.title"),
      content: (
        <p>
          <strong>{t("developmentStrategies.title")}</strong>
          <br />
          {t("developmentStrategies.description")}
          <ul>
            <li>
              <strong>{t("developmentStrategies.critical_services")}</strong>: {t("developmentStrategies.critical_services_description")}
            </li>
            <li>
              <strong>{t("developmentStrategies.remote_work")}</strong>: {t("developmentStrategies.remote_work_description")}
            </li>
            <li>
              <strong>{t("developmentStrategies.backups")}</strong>: {t("developmentStrategies.backups_description")}
            </li>
          </ul>
        </p>
      ),
    },
    {
      key: "recovery",
      title: t("recovery.title"),
      content: (
        <p>
          <strong>{t("recovery.title")}</strong>
          <br />
          {t("recovery.description")}
          <ul>
            <li>
              <strong>{t("recovery.regular_backups")}</strong>: {t("recovery.regular_backups_description")}
            </li>
            <li>
              <strong>{t("recovery.recovery_time")}</strong>: {t("recovery.recovery_time_description")}
            </li>
            <li>
              <strong>{t("recovery.cloud_recovery")}</strong>: {t("recovery.cloud_recovery_description")}
            </li>
          </ul>
        </p>
      ),
    },
  ];

  return (
    <div>
      <LayerInfo
        title={t("layer_title")}
        backgroundImage="https://inova.kz/wp-content/uploads/2023/05/wall_4_3-1.png"
        breadcrumbs={[{ label: t("breadcrumbs.layer_title") }]}
      />
      <AuditSection
        title={t("bcdr_planning.title")}
        paragraphs={[t("bcdr_planning.text")]}
        imageURL={pic1}
        imageAlt="audit"
      />

      {/* Передача секций в InfoCard (AuditInfo) */}
      <InfoCard sections={auditSections} />
    </div>
  );
}

export default LayerFive;
