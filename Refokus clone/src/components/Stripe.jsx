import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='w-[16.66%] px-4 py-5 gap-2 flex items-center justify-between border-y border-r border-zinc-600'>
        <img className=' object-cover' src={val.url} alt="" />
        <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe