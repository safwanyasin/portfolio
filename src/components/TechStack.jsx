import React from "react";
import TechStackCard from "./TechStackCard";

const TechStack = ({ data }) => {
  const { title, description, dev } = data;
  console.log(dev);
  return (
    <section
      className="tech-stack-section flex-col justify-center items-center flex"
      id="tech-stack"
      data-scroll-index={0}
    >
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="500"
        className="sub-text-box block w-full"
      >
        <h2>{title}</h2>
      </div>
      <div className="description block mb-10 w-full">
        <h6>{description}</h6>
      </div>
      <div className="tech-stack-grid">
        {dev.map((item, index) => (
          <TechStackCard
            key={index}
            logo={item.logo}
            name={item.name}
            type={item.type}
          />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
