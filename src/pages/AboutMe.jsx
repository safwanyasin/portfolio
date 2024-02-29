import React, { useEffect } from 'react';
import About from '../components/About';
import HomePageData from '../data/HomePageData.json';
export default function AboutMe() {
  const {
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
      <About data={about} />
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
