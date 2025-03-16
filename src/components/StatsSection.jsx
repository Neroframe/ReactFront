import React from "react";
import "../styles/StatsSection.css";

const FaLock = "🔒";
const FaBuilding = "🏢";
const FaCloudDownloadAlt = "☁️⬇️";

const StatsSection = () => {
  return (
    <div className="stats-section">
      <div className="stat">
        <span className="icon">{FaLock}</span>
        <h3>Безопасность</h3>
        <p>100% защита данных</p>
      </div>
      <div className="stat">
        <span className="icon">{FaBuilding}</span>
        <h3>Компании</h3>
        <p>200+ клиентов</p>
      </div>
      <div className="stat">
        <span className="icon">{FaCloudDownloadAlt}</span>
        <h3>Скачивания</h3>
        <p>5000+ загрузок</p>
      </div>
    </div>
  );
};

export default StatsSection;
