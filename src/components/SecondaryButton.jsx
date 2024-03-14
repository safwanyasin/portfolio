import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const SecondaryButton = ({ dest, content }) => {
  const controls = useAnimation();

  const handleHover = (isHovered) => {
    // controlsL.start({
    //   x: isHovered ? -5 : 0,
    //   transition: { duration: 1.5, ease: [0.4, 0, 0.2, 1] },
    // });
    controls.start({
      y: isHovered ? -2 : 0,
      transition: { duration: 1, ease: [0.4, 0, 0.2, 1] },
    });
  };

  return (
    <motion.div
      className="secondary-button inline-flex"
      onHoverStart={() => handleHover(true)}
      onHoverEnd={() => handleHover(false)}
    >
      {/* <motion.div
        // className="hovered2"
        animate={controls}
        initial={{ y: 0 }}
        exit={{ y: 0 }}
      > */}
      <ScrollLink
        to={dest}
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        <h6>{content}</h6>
      </ScrollLink>
      {/* </motion.div> */}
    </motion.div>
  );
};

export default SecondaryButton;
