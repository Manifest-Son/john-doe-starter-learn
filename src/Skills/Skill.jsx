import React from "react";

function Skill({ icon, title, description }) {
  return (
    <div className="skill-card">
      <div className="skill-icon-wrapper" data-testid="icon-wrapper">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="skill-card-bottom-belt"></div>
    </div>
  );
}

export default Skill;
