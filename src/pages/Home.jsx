import React, { useEffect } from "react";
import Hero from "../components/Hero";
import HomePageData from "../data/HomePageData.json";
import Blob from "../components/Blob";
import BackgroundContainer from "../components/BackgroundContainer";
import BlobSmall from "../components/BlobSmall";
export default function Home() {
  const { hero, socialBtns } = HomePageData;
  return (
    <>
      <BackgroundContainer>
        <BlobSmall />
        <Blob />
      </BackgroundContainer>
      <Hero data={hero} socialData={socialBtns} />
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
