import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
  const [activeItem, setActiveItem] = useState(null);
  const [scrolled, setScrolled] = useState(false);

   const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      className={`header-top-fixed one-page-nav fixed top-0 left-0 right-0 py-4 z-50 bg-transparent transition-all ease duration-300 ${scrolled ? 'fixed-header bg-opacity-90 blur-md' : ''}`}
    >
      <div className="flex justify-between items-center navbar">
        <div className="logo">
          <Link className="navbar-brand" href="#">
            <img
              className="logo-light"
              title
              alt="Logo"
              src="/images/logo-light.svg"
            />
          </Link>
        </div>
        {/* / */}
        <ul className="main-menu flex">
          <li>[ &nbsp; </li>
          <li>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onMouseEnter={() => handleItemClick('about')}
            >
              about
            </ScrollLink>
          </li>
          <li>,&nbsp;</li>
          <li>
            <ScrollLink
              to="project"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onMouseEnter={() => handleItemClick('projects')}
            >
              projects
            </ScrollLink>
          </li>
          <li>,&nbsp;</li>
          <li>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onMouseEnter={() => handleItemClick('contact')}
            >
              contact
            </ScrollLink>
          </li>
          <li>&nbsp; ]</li>
        </ul>
      </div>
    </div>
  );
}
