import React from "react";
import "../styles/LayerInfo.css";

const LayerInfo = ({ title, breadcrumbs, backgroundImage }) => {
  return (
    <div
      className="layer-info-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay">
        <div className="page-title-inner">
          <div className="page-title-holder">
            <h1 className="page-title">{title}</h1>
          </div>
          <ul className="ct-breadcrumb">
            {breadcrumbs.map((item, index) => (
              <li key={index}>
                {index !== breadcrumbs.length - 1 ? (
                  <a className="breadcrumb-entry" href={item.link}>
                    {item.label}
                  </a>
                ) : (
                  <span className="breadcrumb-entry">{item.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LayerInfo;
