import React from 'react'

function VenueSection() {
  return (
    <>
        <section className=' flex flex-col justify-center items-center'>
            <div className=' flex flex-col justify-center items-center mt-24 relative overflow-hidden'>
                <img
                    className="circle-banner"
                    src="https://24carrots.com/wp-content/uploads/2023/10/unforegetable-banner.png"
                    alt="img"
                />
                <div className='half-circle font-bold bg-white rounded-full absolute -bottom-[475px] md:w-[650px] md:h-[650px] w-[300px] h-[550px]'></div>
            </div>
            <div className=' flex flex-col gap-10 justify-center items-center relative -top-10'>
                <h3 className=' text-green-600 tracking-widest '>VENUES</h3>
                <h2 className=' text-green-900 text-center font-bold text-[50px] md:text-[70px]'>Unforgettable<br/> Venues</h2>
                <p className=' font-sans font-extralight text-center w-[400px] md:w-[600px] text-gray-600'>24 Carrots is the exclusive or preferred caterer at Southern California’s most spectacular properties. From intimate understated spaces to large and luxurious, we’ll help you find the event venue that makes your heart skip a beat.</p>
                <button className='flex font-sans gap-1 items-center justify-center uppercase bg-[#C15627] hover:bg-[#ec7b4a] transition-all text-white p-0 px-3 py-2 rounded-3xl'>explore venues <span className=''>→</span></button>
            </div>
        </section>
    </>
  )
}

export default VenueSection
