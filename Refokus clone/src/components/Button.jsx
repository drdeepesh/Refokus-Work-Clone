import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title = "Start Project"}) => {
  return (
    <div className='w-36 px-4 py-1.5 bg-zinc-100 text-black rounded-full flex items-center justify-between'>
        <span className='text-sm font-medium'>{title}</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Button