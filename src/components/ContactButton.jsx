import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const ContactButton = () => {
  const controls = useAnimation();
  const iconPath = process.env.PUBLIC_URL;
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
      className="contact-button flex flex-row align-middle justify-center items-center"
      onHoverStart={() => handleHover(true)}
      onHoverEnd={() => handleHover(false)}
    >
      {/* <motion.div
        // className="hovered2"
        animate={controls}
        initial={{ y: 0 }}
        exit={{ y: 0 }}
      > */}
      <img src={iconPath + "/message.svg"} />
      <ScrollLink
        to="contact"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        <h6>Get in touch</h6>
      </ScrollLink>
      {/* </motion.div> */}
    </motion.div>
  );
};

export default ContactButton;
