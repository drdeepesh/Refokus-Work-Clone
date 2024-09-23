import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import arqitleVideo from "../assets/videos/arqitel.webm"
import ttrVideo from "../assets/videos/ttr.webm"
import yahooVideo from "../assets/videos/yahoo.webm"
import yirVideo from "../assets/videos/yir2022.webm"

const Products = () => {
  var products = [
    {
      title: "arqitle",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-32 relative">
      {products.map((val, index) => (
        <Product key={index} val={val} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
          className="window absolute w-[32rem] h-[23rem] bg-white left-[44%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="w-full h-full bg-sky-100"
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
          >
            <video className="w-full h-full object-cover" autoPlay muted loop playsInline src={arqitleVideo}></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="w-full h-full bg-sky-300"
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
          >
            <video className="w-full h-full object-cover" autoPlay muted loop playsInline src={ttrVideo}></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="w-full h-full bg-sky-500"
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
          >
            <video className="w-full h-full object-cover" autoPlay muted loop playsInline src={yirVideo}></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="w-full h-full bg-sky-700"
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
          >
            <video className="w-full h-full object-cover" autoPlay muted loop playsInline src={yahooVideo}></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
