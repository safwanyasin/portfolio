import React from "react";
import { Link as ScrollLink } from "react-scroll";
import WorkCard from "./WorkCard"; // Import the WorkCard component
import FutureProjectCard from "./FutureProjectCard";

export default function SelecetedWork({ data }) {
  const { title, allProjects, futureProject } = data;
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
        className="sub-text-box block mb-3 w-full"
      >
        <h2>{title}</h2>
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
