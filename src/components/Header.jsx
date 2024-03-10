import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = ({ data }) => {
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className={`header-top-fixed one-page-nav fixed top-0 left-0 right-0 py-4 z-50 bg-transparent transition-all ease duration-300 ${
        scrolled ? "fixed-header bg-opacity-90 blur-md" : ""
      }`}
      animate={{ y: 0 }}
      initial={{ y: -75 }}
      transition={{ duration: 0.5, ease: "linear" }}
    >
      <div className="flex justify-between items-center navbar">
        <div className="logo">
          <Link to="/" className="navbar-brand">
            <h6>Safwan.</h6>
          </Link>
        </div>

        <div className="flex">
          <ul className="main-menu flex">
            <li>
              <Link
                to="/about"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onMouseEnter={() => handleItemClick("about")}
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
                onMouseEnter={() => handleItemClick("projects")}
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
                onMouseEnter={() => handleItemClick("contact")}
              >
                contact
              </Link>
            </li>
          </ul>
          <ul className="main-menu-small flex">
            <li>
              <Link
                to="/about"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onMouseEnter={() => handleItemClick("about")}
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
                onMouseEnter={() => handleItemClick("projects")}
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
                onMouseEnter={() => handleItemClick("contact")}
              >
                contact
              </Link>
            </li>
          </ul>
          <div className="vertical-line"></div>
          <ul className="socials flex">
            <li>
              <a
                href="https://www.linkedin.com/in/safwanyasin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-linkedin fa-lg"
                  style={{ color: "#fff" }}
                ></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/safwanyasin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-github fa-lg"
                  style={{ color: "#fff" }}
                ></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
