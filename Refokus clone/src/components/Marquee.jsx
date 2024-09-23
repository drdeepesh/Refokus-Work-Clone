import { motion } from "framer-motion";
import React from "react";

const Marquee = ({ imageurl, direction }) => {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex py-10 gap-20 pr-20 flex-shrink-0"
      >
        {imageurl.map((url, index) => (
          <img key={index} src={url} className="" />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex py-10 gap-20 flex-shrink-0"
      >
        {imageurl.map((url, index) => (
          <img key={index} src={url} className="" />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
