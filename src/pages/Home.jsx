import React from "react";
import Hero from "../components/Hero";
import HomePageData from "../data/HomePageData.json";
import Blob from "../components/Blob";
import BackgroundContainer from "../components/BackgroundContainer";
import BlobSmall from "../components/BlobSmall";
import AmbiencePink from "../components/AmbiencePink";
import AmbienceGreen from "../components/AmbienceGreen";
import About from "../components/About";
import SelecetedWork from "../components/SelectedWork";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
export default function Home() {
  const { hero, about, work, knowledge } = HomePageData;
  return (
    <>
      <BackgroundContainer>
        <div className="ambienceBL">
          <AmbienceGreen />
        </div>
        <div className="ambienceTR">
          <AmbiencePink />
        </div>
        <div className="ambienceTC">
          <AmbienceGreen />
        </div>
        <div className="blob3d">
          <Blob />
        </div>
        <div className="blob3dSmall">
          <BlobSmall />
        </div>
      </BackgroundContainer>
      <Hero data={hero} />
      <About data={about} />
      <SelecetedWork data={work} />
      <TechStack data={knowledge} />
      <Contact />
      {/* <Brands data={brands} />
      <About data={about} />
      <Projects data={projects} />
      <Service data={service} />
      <Experience data={experience} />
      <Testimonial data={testimonial} />
      <Contact data={contact} socialData={socialBtns} /> */}
    </>
  );
}
