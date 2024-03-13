import React from "react";

const TechStackCard = ({ logo, name, type }) => {
  const iconPath = process.env.PUBLIC_URL + "/tech";

  return (
    <div className="tech-stack-card">
      <div className="content">
        <div className="logo flex items-center align-middle justify-center">
          <img src={iconPath + logo} alt={name} />
        </div>

        <div className="details">
          <h2 className="name">{name}</h2>
          <div className="type">
            <h6>{type}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackCard;
