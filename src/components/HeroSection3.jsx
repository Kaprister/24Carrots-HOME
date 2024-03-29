import React from 'react'

function HeroSection3() {
  return (
    <>
        <section className=' flex flex-col md:flex-row gap-20 mt-20 mx-10'>
            <div className=' w-full md:w-1/2'>
                <div className=' rounded-t-full overflow-hidden'>
                    <img
                        decoding="async"
                        className=''
                        src="https://24carrots.com/wp-content/uploads/2023/08/wedding-scroll-cropped.jpg"
                        alt="img"
                        data-slide-num="0"
                        // style={"transform: translate(0%, 0px)"}
                    />
                </div>
            </div>
            <div className=' flex flex-col items-center md:items-start justify-center gap-10 w-full md:w-1/2'>
                <h1 className=' font-bold text-green-900 text-[70px] text-center md:text-start'>
                    Making Every<br/>
                    Experience<br/>
                    Magical
                </h1>
                <div className=' flex gap-20'>
                    <div className=' flex flex-col gap-5 text-gray-500 font-bold text-[20px]'>
                        <p className=' text-green-900 cursor-pointer'>Weddings</p>
                        <p className=' hover:text-[#ec7b4a] cursor-pointer'>Social</p>
                        <p className=' hover:text-[#ec7b4a] cursor-pointer'>Corporate</p>
                        <p className=' hover:text-[#ec7b4a] cursor-pointer'>Venues</p>
                    </div>
                    <div className=' flex flex-col gap-5 items-start text-green-900'>
                        <p className=' font-sans text-green-900 font-semibold tracking-widest'>EXCEPTIONAL WEDDINGS</p>
                        <p className=' font-sans font-extralight'>
                            The most important day of your life, is ours too. Your wedding should be the ultimate celebration of your relationship, and our team of experts guide you through the process, offering peace of mind and a remarkable experience.
                        </p>
                        <button className='feature-btn  font-sans flex gap-1 items-center justify-center uppercase bg-[#C15627] hover:bg-[#ec7b4a] transition-all text-white p-0 px-3 py-2 rounded-3xl'>LEARN MORE 
                            <span className='arrow-animation'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default HeroSection3
