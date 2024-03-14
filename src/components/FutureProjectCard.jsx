import React from "react";
import PlainButton from "./PlainButton";
import Spline from "@splinetool/react-spline";
import ContactButton from "./ContactButton";

const FutureProjectCard = ({ logo, name, description }) => {
  const iconPath = process.env.PUBLIC_URL;

  return (
    <div
      className="future-project-card"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="content">
        <img className="logo" src={iconPath + logo} />
        <h2 className="name">{name}</h2>
        <p className="description mb-10">{description}</p>
        <ContactButton />
      </div>
    </div>
  );
};

export default FutureProjectCard;
