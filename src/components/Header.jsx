import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

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
      className={`header-top-fixed one-page-nav fixed top-0 left-0 right-0 py-4 z-50 bg-transparent transition-all ease duration-300`}
      animate={{ y: 0 }}
      initial={{ y: -75 }}
      transition={{ duration: 0.5, ease: "linear", delay: 1 }}
    >
      <div className="flex justify-between items-center navbar">
        <div className="logo">
          <ScrollLink
            to="home"
            className="navbar-brand"
            smooth={true}
            offset={-80}
            duration={500}
          >
            <h6>Safwan.</h6>
          </ScrollLink>
        </div>

        <div className="flex">
          <ul className="main-menu flex">
            <li>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onMouseEnter={() => handleItemClick("about")}
              >
                about
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="selected-work"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onMouseEnter={() => handleItemClick("projects")}
              >
                work
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onMouseEnter={() => handleItemClick("contact")}
              >
                contact
              </ScrollLink>
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
