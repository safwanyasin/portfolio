import React from "react";
import ContactButton from "./ContactButton";

const FutureProjectCard = ({ logo, name, description }) => {
  const iconPath = process.env.PUBLIC_URL;

  return (
    <div className="future-project-card-container">
      <div
        className="future-project-card"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="content">
          <img className="logo" src={iconPath + logo} alt="" />
          <h2 className="name">{name}</h2>
          <p className="description mb-10">{description}</p>
          <ContactButton />
        </div>
      </div>
    </div>
  );
};

export default FutureProjectCard;
