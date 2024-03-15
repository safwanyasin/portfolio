import React from "react";
import WorkCard from "./WorkCard"; // Import the WorkCard component
import FutureProjectCard from "./FutureProjectCard";

export default function SelecetedWork({ data }) {
  const { title, description, allProjects, futureProject } = data;
  const workItems = allProjects;

  return (
    <section
      className="selected-work-section flex-col justify-center items-center flex"
      id="selected-work"
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
      <div
        className="description block mb-10 w-full"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <h6>{description}</h6>
      </div>

      {/* Map over the workItems and render WorkCard component for each item */}
      <div className="work-cards-container">
        {workItems.map((workItem) => (
          <WorkCard key={workItem.id} {...workItem} />
        ))}
        <FutureProjectCard {...futureProject} />
      </div>
    </section>
  );
}
