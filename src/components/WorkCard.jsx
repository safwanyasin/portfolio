import React from "react";
import PlainButton from "./PlainButton";
import Spline from "@splinetool/react-spline";

const WorkCard = ({
  name,
  description,
  logoUrl,
  imageUrl,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="work-card" data-aos="fade-down" data-aos-duration="1000">
      <div className="content">
        <div>
          <img className="logo" src={logoUrl} />
          <h2 className="name">{name}</h2>
          <p className="description">{description}</p>
        </div>
        <PlainButton dest={buttonLink} content={buttonText} />
      </div>
      <div className="model">
        <Spline scene={imageUrl} />
      </div>
    </div>
  );
};

export default WorkCard;
