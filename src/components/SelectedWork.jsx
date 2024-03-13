import React from "react";
import { Link as ScrollLink } from "react-scroll";
import WorkCard from "./WorkCard"; // Import the WorkCard component

export default function SelecetedWork() {
  const workItems = [
    {
      id: "taletuner",
      logoUrl: "taletuner_logo.png",
      buttonText: "View Code",
      buttonLink: "",
      name: "TaleTuner - A Bookkeeping and AI Story Generation App built using DDD",
      description:
        "TaleTuner - A Bookkeeping and AI Story Generation App built using Flutter DDD",
      imageUrl: "https://prod.spline.design/xF6USS3srKGVjEO5/scene.splinecode",
    },
    {
      id: "nottacafe",
      logoUrl: "nottacafe_logo.png",
      buttonText: "View Code",
      buttonLink: "",
      name: "NottACafe - A Food Ordering App",
      description: "Nottacafe - A Food Ordering App build using Flutter",
      imageUrl: "https://prod.spline.design/3BqexEOwVqzx486w/scene.splinecode",
    },
    {
      id: "lightbulb",
      logoUrl: "lightbulb_logo.png",
      buttonText: "View Code",
      buttonLink: "",
      name: "Lightbulb - An Educational Social Media App",
      description: "Lightbulb - An Eduactional Social App build using Flutter",
      imageUrl: "https://prod.spline.design/na9Rwn3vPI3LzBmw/scene.splinecode",
    },
  ];

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
        className="hs-text-box flex items-center justify-center "
      >
        <h2>Selected Work</h2>
      </div>

      {/* Map over the workItems and render WorkCard component for each item */}
      <div className="work-cards-container">
        {workItems.map((workItem) => (
          <WorkCard key={workItem.id} {...workItem} />
        ))}
      </div>
    </section>
  );
}
