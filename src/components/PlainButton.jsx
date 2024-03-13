import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

const PlainButton = ({ dest, content }) => {
  const iconPath = process.env.PUBLIC_URL;
  return (
    <div className="plain-button inline-flex">
      {/* <motion.div
        // className="hovered2"
        animate={controls}
        initial={{ y: 0 }}
        exit={{ y: 0 }}
      > */}
      <div className="flex align-middle justify-center items-center">
        <Link to={dest} spy={true} smooth={true} offset={-80} duration={500}>
          <h6 className="text-white opacity-100">{content}</h6>
        </Link>
        <img className="ml-1" src={iconPath + "/arrow-right.svg"} />
      </div>

      {/* </motion.div> */}
    </div>
  );
};

export default PlainButton;
