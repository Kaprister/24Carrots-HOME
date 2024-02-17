import React from 'react'

function HeroSection2() {
  return (
    <>
        <section className=' flex items-center justify-between gap-20 pl-3 mt-10 pb-1'>
            <div className=' flex flex-col gap-5 text-green-900 justify-center items-center w-1/2'>
                <p className=' uppercase tracking-widest'>welcome to 24 carrots</p>
                <h1 className=' font-bold text-[63px] w-[55%] text-center'>Remarkable catering & Events</h1>
                <p className=' font-sans font-extralight text-black text-center w-[80%]'>24 Carrots is the premier catering and events company of choice in Southern California. We create remarkable experiences by offering the finest quality foods and providing unsurpassed personalized service, driven by our passion for life’s special occasions.</p>
                <button className=' uppercase font-sans bg-[#C15627] hover:bg-[#ec7b4a] transition-all text-white px-3 py-2 rounded-3xl'>get in touch <span className=''>→</span></button>
            </div>
            <div className=' w-1/2'>
                <div className=' relative rounded-tl-[250px] overflow-hidden'>
                    <img
                        className=''
                        decoding="async"
                        src="https://24carrots.com/wp-content/uploads/2023/10/1.1-Lorely-Meza-1.jpg"
                        alt="img"
                    />
                </div>
            </div>
        </section>
    </>
  )
}

export default HeroSection2
