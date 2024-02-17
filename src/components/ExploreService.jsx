import React from 'react'

function ExploreService() {
  return (
    <div className=' flex flex-col justify-center items-center gap-5 mt-16'>
      <h1 className = " text-[#1A4122] font-bold text-[60px] text-center">Great Food &<br/> A Whole Lot More</h1>
      <p className=' font-sans font-extralight text-center w-[60%]'>Catering is just the beginning. Sure, we love astonishing your guests with attentive service, thoughtful food, and an inviting environment. But what really matters most is helping you create memories that will last for a lifetime. Our industry experts think of all the little things that turn an ordinary event into an unforgettable experience.</p>
      <button className=' font-sans bg-[#C15627] text-center uppercase px-3 py-2 text-white hover:bg-[#b8562c] rounded-3xl'>explore services  <span className=''>→</span></button>
    </div>
  )
}

export default ExploreService
