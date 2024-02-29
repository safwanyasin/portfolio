import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

export default function Header({data}) {
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
          <Link to="/" className="navbar-brand" href="#">
            <h6>
              <TypeAnimation
                cursor={false}
                sequence={data}
                speed={1}
                repeat={0}
              />
            </h6>
          </Link>
        </div>
        {/* / */}
        <ul className="main-menu flex"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="500"
        >
          <li>[ &nbsp; </li>
          <li>
            <Link
              to="/about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onMouseEnter={() => handleItemClick('about')}
            >
              about
            </Link>
          </li>
          <li>,&nbsp;</li>
          <li>
            <Link
              to="/projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onMouseEnter={() => handleItemClick('projects')}
            >
              projects
            </Link>
          </li>
          <li>,&nbsp;</li>
          <li>
            <Link
              to="/contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onMouseEnter={() => handleItemClick('contact')}
            >
              contact
            </Link>
          </li>
          <li>&nbsp; ]</li>
        </ul>
        <ul className="main-menu-small">
          <li>
            <Link
              to="/about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onMouseEnter={() => handleItemClick('about')}
            >
              about
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onMouseEnter={() => handleItemClick('projects')}
            >
              projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onMouseEnter={() => handleItemClick('contact')}
            >
              contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
