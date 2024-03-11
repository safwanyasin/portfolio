import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BottomNavBar = ({ data }) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const iconPath = process.env.PUBLIC_URL + "/nav-bar-icons/";

  return (
    <motion.div
      className={`bottom-nav-bar py-4 z-50 transition-all ease duration-300`}
      animate={{ y: 0 }}
      initial={{ y: 75 }}
      transition={{ duration: 0.5, ease: "linear", delay: 1 }}
    >
      <div className="block navbar">
        <ul className="flex justify-between items-center">
          <li>
            <Link
              to="/"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onMouseEnter={() => handleItemClick("home")}
            >
              <img
                src={iconPath + "home.svg"}
                alt="Home"
                className="nav-icon"
              />
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onMouseEnter={() => handleItemClick("about")}
            >
              <img
                src={iconPath + "about.svg"}
                alt="About"
                className="nav-icon"
              />
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
              <img
                src={iconPath + "work.svg"}
                alt="Projects"
                className="nav-icon"
              />
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
              <img
                src={iconPath + "contact.svg"}
                alt="Contact"
                className="nav-icon"
              />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/safwanyasin"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <img
                src={iconPath + "linkedin.svg"}
                alt="LinkedIn"
                className="nav-icon"
              />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.github.com/safwanyasin"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <img
                src={iconPath + "github.svg"}
                alt="Github"
                className="nav-icon"
              />
            </Link>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default BottomNavBar;
