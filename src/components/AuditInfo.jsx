import { useState } from "react";
import "../styles/AuditInfo.css";

function AuditInfo({ sections }) {
  // Set default selected item as the first one in the list
  const [selected, setSelected] = useState(sections[0].key);

  return (
    <div className="audit-container">
      {/* List of clickable items */}
      <ul className="audit-list">
        {sections.map(({ key, title }) => (
          <li
            key={key}
            onClick={() => setSelected(key)}
            className={selected === key ? "active" : ""}
          >
            {title}
          </li>
        ))}
      </ul>

      {/* Display corresponding content */}
      <div className="audit-content">
        {sections.map(({ key, content }) =>
          key === selected ? <div key={key}>{content}</div> : null
        )}
      </div>
    </div>
  );
}

export default AuditInfo;
