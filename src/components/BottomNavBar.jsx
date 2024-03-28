import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const BottomNavBar = () => {
  // const [activeItem, setActiveItem] = useState(null);

  // const handleItemClick = (itemName) => {
  //   setActiveItem(itemName);
  // };

  const iconPath = process.env.PUBLIC_URL + "/nav-bar-icons/";

  // Define an array of navbar items with their corresponding icons, links, and alt text
  const navbarItems = [
    { id: "home", icon: "home.svg", link: "home", alt: "Home" },
    { id: "about", icon: "about.svg", link: "about", alt: "About" },
    {
      id: "selected-work",
      icon: "work.svg",
      link: "selected-work",
      alt: "Projects",
    },
    { id: "contact", icon: "contact.svg", link: "contact", alt: "Contact" },
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
          {navbarItems.map((item) =>
            item.alt == "Github" || item.alt == "LinkedIn" ? (
              <li key={item.id}>
                <Link to={item.link}>
                  <img
                    src={iconPath + item.icon}
                    alt={item.alt}
                    className="nav-icon"
                  />
                </Link>
              </li>
            ) : (
              <li key={item.id}>
                <ScrollLink
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  // onMouseEnter={() => handleItemClick(item.id)}
                >
                  <img
                    src={iconPath + item.icon}
                    alt={item.alt}
                    className="nav-icon"
                  />
                </ScrollLink>
              </li>
            )
          )}
        </ul>
      </div>
    </motion.div>
  );
};

export default BottomNavBar;
