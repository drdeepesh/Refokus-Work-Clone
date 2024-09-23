import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-screen-xl mx-auto flex gap-2 py-10'>
        <div className="basis-1/2 flex flex-col gap-10">
            <h1 className="text-[12rem] tracking-tight leading-none font-medium">refokus.</h1>
            <div className="flex items-center gap-10 text-zinc-600 capitalize">
                {["privacy policy", "cookie policy", "impressum", "Terms"].map((item,index)=> <span key={index}>{item}</span>)}
            </div>
        </div>
        <div className="basis-1/2 flex ml-28 p-5">
            <div className="flex flex-col capitalize text-zinc-600 text-sm basis-1/3">
                <h4 className='mb-10'>socials</h4>
                {["instagram", "twitter(x)", "linkedIn"].map((item,index)=><a key={index} href="#" className='block mt-2.5'>{item}</a>)}
            </div>

            <div className="flex flex-col capitalize text-zinc-600 text-sm basis-1/3">
                <h4 className='mb-10'>sitemap</h4>
                {["home", "work", "careers", "contact"].map((item,index)=><a key={index} href="#" className='block mt-2.5 text-zinc-100'>{item}</a>)}
            </div>

            <div className="flex flex-col basis-1/2 items-end mt-10 justify-center gap-4">
                <p className='text-sm text-right font-medium'>Refokus is a pioneering digital ageny driven by design and empowered by technology.</p>
                <span className='block px-2 py-1 bg-blue-500 w-fit text-xs'><span className='text-base mr-3'>ℳ</span> Enterprise Partner</span>
            </div>
        </div>
    </div>
  )
}

export default Footer