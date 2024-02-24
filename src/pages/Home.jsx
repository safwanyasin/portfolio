import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import HomePageData from '../data/HomePageData.json';
export default function Home() {
  const {
    hero,
    socialBtns,
    brands,
    about,
    projects,
    service,
    experience,
    testimonial,
    contact,
  } = HomePageData;
  return (
    <>
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
