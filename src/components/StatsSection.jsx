import React from "react";
import "../styles/StatsSection.css";
import { useTranslation } from "react-i18next";

const FaLock = "🔒";
const FaBuilding = "🏢";
const FaCloudDownloadAlt = "☁️⬇️";

const StatsSection = () => {
  const { t } = useTranslation("statssection");

  return (
    <div className="stats-section">
      <div className="stat">
        <span className="icon">{FaLock}</span>
        <h3>{t("statsSection.security")}</h3>
        <p>{t("statsSection.dataProtection")}</p>
      </div>
      <div className="stat">
        <span className="icon">{FaBuilding}</span>
        <h3>{t("statsSection.companies")}</h3>
        <p>{t("statsSection.clients")}</p>
      </div>
      <div className="stat">
        <span className="icon">{FaCloudDownloadAlt}</span>
        <h3>{t("statsSection.downloads")}</h3>
        <p>{t("statsSection.totalDownloads")}</p>
      </div>
    </div>
  );
};

export default StatsSection;
