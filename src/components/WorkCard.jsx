import React from "react";
import PlainButton from "./PlainButton";
// import Spline from "@splinetool/react-spline";

const WorkCard = ({
  name,
  description,
  logoUrl,
  imageUrl,
  buttonText,
  buttonLink,
}) => {
  const iconPath = process.env.PUBLIC_URL;
  return (
    <div className="work-card-container">
      <div className="work-card" data-aos="fade-down" data-aos-duration="1000">
        <div className="content">
          <div>
            {logoUrl !== "" && (
              <img className="logo" src={logoUrl} alt={logoUrl} />
            )}
            <h2 className="name">{name}</h2>
            <p className="description">{description}</p>
          </div>
          <PlainButton dest={buttonLink} content={buttonText} />
        </div>
        <div className="model">
          {/* <Spline scene={imageUrl} /> */}
          {imageUrl !== "" && <img src={iconPath + imageUrl} alt={imageUrl} />}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
