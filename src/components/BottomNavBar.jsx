import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BottomNavBar = ({ data }) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const iconPath = process.env.PUBLIC_URL + "/nav-bar-icons/";

  // Define an array of navbar items with their corresponding icons, links, and alt text
  const navbarItems = [
    { id: "home", icon: "home.svg", link: "/", alt: "Home" },
    { id: "about", icon: "about.svg", link: "/about", alt: "About" },
    { id: "projects", icon: "work.svg", link: "/projects", alt: "Projects" },
    { id: "contact", icon: "contact.svg", link: "/contact", alt: "Contact" },
    {
      id: "linkedin",
      icon: "linkedin.svg",
      link: "https://www.linkedin.com/in/safwanyasin",
      alt: "LinkedIn",
    },
    {
      id: "github",
      icon: "github.svg",
      link: "https://www.github.com/safwanyasin",
      alt: "GitHub",
    },
  ];

  return (
    <motion.div
      className={`bottom-nav-bar py-4 z-50 transition-all ease duration-300`}
      animate={{ y: 0 }}
      initial={{ y: 75 }}
      transition={{ duration: 0.5, ease: "linear", delay: 1 }}
    >
      <div className="block navbar">
        <ul className="flex justify-between items-center">
          {navbarItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onMouseEnter={() => handleItemClick(item.id)}
              >
                <img
                  src={iconPath + item.icon}
                  alt={item.alt}
                  className="nav-icon"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default BottomNavBar;
