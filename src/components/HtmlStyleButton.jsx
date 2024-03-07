import React from "react";
import { motion, useAnimation } from "framer-motion";

const HtmlStyleButton = ({ onPressed, content }) => {
  const controlsL = useAnimation();
  const controlsR = useAnimation();

  const handleHover = (isHovered) => {
    controlsL.start({
      x: isHovered ? -5 : 0,
      transition: { duration: 1.5, ease: [0.4, 0, 0.2, 1] },
    });
    controlsR.start({
      x: isHovered ? 5 : 0,
      transition: { duration: 1.5, ease: [0.4, 0, 0.2, 1] },
    });
  };

  return (
    <motion.div
      className="html-style-button inline-flex"
      onHoverStart={() => handleHover(true)}
      onHoverEnd={() => handleHover(false)}
      onClick={onPressed}
    >
      <motion.div
        // className="hovered1"
        animate={controlsL}
        initial={{ x: 0 }}
        exit={{ x: 0 }}
      >
        <h6>&lt;&nbsp;</h6>
      </motion.div>
      <h6>{content}</h6>
      <motion.div
        // className="hovered2"
        animate={controlsR}
        initial={{ x: 0 }}
        exit={{ x: 0 }}
      >
        <h6>&nbsp;/&gt;</h6>
      </motion.div>
    </motion.div>
  );
};

export default HtmlStyleButton;
