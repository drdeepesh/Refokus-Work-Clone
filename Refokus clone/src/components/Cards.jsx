import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='w-full'>
        <div className="max-w-screen-xl mx-auto flex gap-2">
            <Card width={"basis-1/3"} start={false} />
            <Card width={"basis-2/3"} start={true} hover={"true"} />
        </div>
    </div>
  )
}

export default Cards