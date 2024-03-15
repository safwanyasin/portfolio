import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HomePageData from "../data/HomePageData.json";
import BottomNavBar from "./BottomNavBar";

export default function Layout() {
  const {
    logo,
  } = HomePageData;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header data={logo} />
      <main>
        <Outlet />
      </main>
      <BottomNavBar />
      <Footer />
      {/* <CustomCursor /> */}
      {/* <Footer /> */}
    </>
  );
}
