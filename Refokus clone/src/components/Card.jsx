import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowRight } from "react-icons/go";

const Card = ({width, start, hover="false"}) => {
  return (
    <motion.div whileHover={{backgroundColor: hover === "true" ? "#7443ff" : "#52525B", padding: "25px"}} className={`${width} bg-zinc-800 p-5 rounded-xl min-h-[30rem]`}>
        {start === false && (
            <div className="w-full h-full flex flex-col">
                <div className="w-full h-fit flex items-center justify-between">
                    <h3>Up Next: Culture</h3>
                    <GoArrowRight/>
                </div>
                <div className='w-full h-full flex flex-col justify-between'>
                    <h1 className='text-2xl mt-10'>Who we are</h1>
                    <p className='text-sm text-zinc-500'>Explore what drives our team.</p>
                </div>
            </div>
        )}
        {start && (
            <div className="w-full h-full flex flex-col">
                <div className="w-full flex items-center justify-between">
                    <h3>Get in Touch</h3>
                    <GoArrowRight/>
                </div>
                <h1 className='mt-10 text-2xl'>Let's get toit, <br /> together.</h1>
                <div className='w-full flex flex-col items-start mt-auto'>
                    <h1 className='text-8xl tracking-tight font-medium mb-5'>Start a Project</h1>
                    <button className='px-4 py-2 text-sm font-semibold rounded-full border-solid border-[1px] border-zinc-100'>Contact us</button>
                </div>
            </div>
        )}
    </motion.div>
  )
}

export default Card