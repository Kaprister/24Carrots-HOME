import React from 'react'

function ServicesSection() {
  return (
    <>
        <section className=' flex flex-col md:flex-row gap-10 px-20 pt-20'>
            <div className=' w-full md:w-1/3 flex flex-col gap-5 cursor-pointer order-2 md:order-1'>
                <div className=' flex gap-5 flex-col items-center md:items-start'>
                    <h2 className=' text-green-900 font-medium text-[35px]'>Gourmet Catering</h2>
                    <p className=' font-extralight font-sans'>Our professionally-trained culinary team is passionate and proud of our diverse and thoughtful menu, always cooking up something that aligns with your great taste.</p>
                    <button className='feature-btn flex justify-center items-center gap-2 font-sans w-[50%] border text-[#C15627] border-[#C15627] text-center uppercase px-3 py-2 hover:border-[#e5703e] rounded-3xl'>LEARN MORE 
                    <span className='arrow-animation-ser'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
                    </span></button>
                </div>
                <div className=' flex gap-5 flex-col items-center md:items-start'>
                    <h2 className=' text-green-900 font-medium text-[35px]'>Bar Service</h2>
                    <p className=' font-sans font-extralight'>Our sophisticated flavor expertise enables us to create inventive concoctions that generate buzz in more ways than one!</p>
                    <button className='feature-btn flex gap-2 justify-center items-center font-sans w-1/2 border text-[#C15627] border-[#C15627] text-center uppercase px-3 py-2 hover:border hover:border-[#b8562c] rounded-3xl'>LEARN MORE 
                        <span className='arrow-animation-ser'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
                        </span>
                    </button>
                </div>
            </div>
            <div className=' w-full md:w-1/3 rounded-t-full overflow-hidden order-1 md:order-2'>
                <img
                    src="https://24carrots.com/wp-content/uploads/2023/10/Home_Services_GIF_R3.gif"
                    alt ="gif"
                />
            </div>
            <div className=' flex flex-col gap-5 w-full md:w-1/3 cursor-pointer order-3'>
                <div className=' flex flex-col gap-5 items-center md:items-start'>
                    <h2 className=' text-green-900 font-medium text-[35px]'>Staffing</h2>
                    <p className=' font-sans font-extralight'>The hand-selected team at 24 Carrots are just as important to our reputation as our gourmet food. Our staff is certainly the best at what they do, and you’ll work with professionals who genuinely care about the success of your event!</p>
                    <button className='feature-btn flex gap-2 justify-center items-center font-sans w-1/2 border text-[#C15627] border-[#C15627] text-center uppercase px-3 py-2 hover:border-[#b8562c] rounded-3xl'>LEARN MORE 
                    <span className='arrow-animation-ser'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
                    </span>
                    </button>
                </div>
                <div className=' flex flex-col gap-5 items-center md:items-start'>
                    <h2 className=' text-green-900 font-medium text-[35px]'>Event Production</h2>
                    <p className=' font-sans font-extralight'>If mind-blowing spectacles and immersive guest experiences are what you’re after, the specialists at 24 Carrots can pull it off on an epic scale!</p>
                    <button className=' feature-btn flex  gap-2 items-center justify-center font-sans w-1/2 border text-[#C15627] border-[#C15627] text-center uppercase px-3 py-2 hover:border-[#b8562c] rounded-3xl'>LEARN MORE 
                    <span className='arrow-animation-ser'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#C15627'><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
                    </span>
                    </button>
                </div>

            </div>
        </section>
    </>
  )
}

export default ServicesSection

