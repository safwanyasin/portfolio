import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import HomePageData from '../data/HomePageData.json';

export default function Layout() {
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header socialData={socialBtns}/>
      <main>
        <Outlet />
      </main>
      {/* <CustomCursor /> */}
      {/* <Footer /> */}
    </>
  );
}
