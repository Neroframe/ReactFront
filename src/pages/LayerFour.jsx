import AuditSection from "../components/TextBox";
import InfoCard from "../components/AuditInfo";
import pic1 from "../assets/pic1.jpg";
import "../styles/LayerOne.css";
import LayerInfo from "../components/LayerInfo";
import { useTranslation } from "react-i18next";

function LayerOne() {
  const { t } = useTranslation('layerfour'); // Указываем namespace

  const auditSections = [
    {
      key: "monitoring",
      title: t("monitoring.title"),
      content: (
        <p>
          <strong>{t("monitoring.title")}</strong>
          <br />
          {t("monitoring.description")}
          <ul>
            <li>
              <strong>{t("monitoring.device_tracking")}</strong>: {t("monitoring.device_tracking_description")}
            </li>
            <li>
              <strong>{t("monitoring.security_management")}</strong>: {t("monitoring.security_management_description")}
            </li>
            <li>
              <strong>{t("monitoring.real_time_attack_prevention")}</strong>: {t("monitoring.real_time_attack_prevention_description")}
            </li>
          </ul>
        </p>
      ),
    },
    {
      key: "usage",
      title: t("usage.title"),
      content: (
        <p>
          <strong>{t("usage.title")}</strong>
          <br />
          {t("usage.description")}
          <ul>
            <li>
              <strong>{t("usage.role_based_access")}</strong>: {t("usage.role_based_access_description")}
            </li>
            <li>
              <strong>{t("usage.two_factor_authentication")}</strong>: {t("usage.two_factor_authentication_description")}
            </li>
            <li>
              <strong>{t("usage.data_encryption")}</strong>: {t("usage.data_encryption_description")}
            </li>
          </ul>
        </p>
      ),
    },
    {
      key: "incidents",
      title: t("incidents.title"),
      content: (
        <p>
          <strong>{t("incidents.title")}</strong>
          <br />
          {t("incidents.description")}
          <ul>
            <li>
              <strong>{t("incidents.ips_ids_systems")}</strong>: {t("incidents.ips_ids_systems_description")}
            </li>
            <li>
              <strong>{t("incidents.automated_response_tools")}</strong>: {t("incidents.automated_response_tools_description")}
            </li>
            <li>
              <strong>{t("incidents.real_time_alerts")}</strong>: {t("incidents.real_time_alerts_description")}
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
        title={t("endpoint_security.title")}
        paragraphs={[t("endpoint_security.text1")]}
        imageURL={pic1}
        imageAlt="audit"
      />
      <InfoCard sections={auditSections} />
    </div>
  );
}

export default LayerOne;
