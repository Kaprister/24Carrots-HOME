import React from 'react'

function Navbar() {
  return (
    <>
        <div className=' font-sans uppercase flex items-center justify-between p-2 text-[13px] m-7'>
            <div className=' hidden md:flex gap-10 tracking-widest'>
                <p className=' cursor-pointer hover:text-[#ec7b4a]'>about</p>
                <p className=' cursor-pointer hover:text-[#ec7b4a]'>service</p>
                <p className=' hover:text-[#ec7b4a] cursor-pointer'>event</p>
            </div>
            <div className=' mx-auto md:mx-0 flex flex-col justify-center items-center'>
                <h3 className=' cursor-pointer font-bold text-[25px] tracking-widest'>24 carrot</h3>
                <p className=" cursor-pointer font-semibold text-gray-500 tracking-widest text-center">catering & event</p>
            </div>
            <div className=' hidden md:flex gap-10 tracking-widest'>
                <p className=' hover:text-[#ec7b4a] cursor-pointer'>venue</p>
                <p className=' hover:text-[#ec7b4a] cursor-pointer'>careers</p>
                <button className=' uppercase bg-[#C15627] hover:bg-[#ec7b4a] transition-all text-white p-0 px-3 py-1 rounded-3xl'>get in touch</button>
            </div>
        </div>
    </>
  )
}

export default Navbar
