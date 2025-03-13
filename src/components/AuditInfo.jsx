import { useState } from "react";
import "../styles/AuditInfo.css"; 

function AuditInfo() {
  const [selected, setSelected] = useState(null);

  const content = {
    hardware: (
      <div>
        <p>
          <strong>Железо (hardware)</strong>: Аудитор проверяет, как компания
          управляет своими физическими ресурсами, такими как серверы,
          компьютеры, принтеры и другое сетевое оборудование.
        </p>
        <p>
          <strong>Аудит hardware (физического оборудования)</strong> в
          ИТ-инфраструктуре обычно охватывает следующие критерии:
        </p>
        <ol>
          <li>
            <p>
              <strong>Инвентаризация оборудования</strong>: Аудиторы составляют
              список всего оборудования, чтобы понять его использование и
              выявить устаревшие устройства.
            </p>
          </li>
          <li>
            <p>
              <strong>Состояние оборудования</strong>: Оценивается физическое
              состояние оборудования.
            </p>
          </li>
          <li>
            <p>
              <strong>Производительность оборудования</strong>: Анализируется,
              насколько оборудование справляется с задачами.
            </p>
          </li>
          <li>
            <p>
              <strong>Соответствие стандартам</strong>: Проверяется соответствие
              текущим стандартам и требованиям безопасности.
            </p>
          </li>
          <li>
            <p>
              <strong>Поддержка и обслуживание</strong>: Оценивается техническое
              обслуживание и ремонт.
            </p>
          </li>
          <li>
            <p>
              <strong>Резервное копирование и восстановление</strong>:
              Проверяется план восстановления при сбоях.
            </p>
          </li>
        </ol>
      </div>
    ),
    software: (
      <p>
        <strong>Software Audit:</strong> Software-related audit details will go
        here.
      </p>
    ),
    network: (
      <p>
        <strong>Network Audit:</strong> Information about network audit will be
        displayed here.
      </p>
    ),
  };

  return (
    <div className="audit-container">
      <ul className="audit-list">
        {Object.keys(content).map((key) => (
          <li
            key={key}
            onClick={() => setSelected(key)}
            className={selected === key ? "active" : ""}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </li>
        ))}
      </ul>

      {selected && <div className="audit-content">{content[selected]}</div>}
    </div>
  );
}

export default AuditInfo;
