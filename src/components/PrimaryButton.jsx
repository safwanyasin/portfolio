import React from "react";
import { motion, useAnimation } from "framer-motion";

const PrimaryButton = ({ onPressed, content }) => {
  const controls = useAnimation();
  const controlsL = useAnimation();
  const controlsR = useAnimation();

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
      className="primary-button inline-flex"
      onHoverStart={() => handleHover(true)}
      onHoverEnd={() => handleHover(false)}
      onClick={onPressed}
    >
      {/* <motion.div
        // className="hovered2"
        animate={controls}
        initial={{ y: 0 }}
        exit={{ y: 0 }}
      > */}
      <h6>{content}</h6>
      {/* </motion.div> */}
    </motion.div>
  );
};

export default PrimaryButton;
