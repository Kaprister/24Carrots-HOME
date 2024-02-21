import React, { useRef, useState } from 'react'

const sliderImages = [
    "https://24carrots.com/wp-content/uploads/2023/10/1.1-Lorely-Meza-1.jpg",
    "https://24carrots.com/wp-content/uploads/2023/10/1.2-Holly-Sigafoos-Photo.jpg",
    "https://24carrots.com/wp-content/uploads/2023/10/1.3-Holly-Sigafoos-Photo.jpg",
    "https://24carrots.com/wp-content/uploads/2023/10/1.4-Lorely-Meza.jpg",

];


function HeroSection2() {
    const [selectedImage, setSelectedImage] = useState(0)
    
    const handleImageChange = (index) => {
        setSelectedImage(index)
    }

  return (
    <>
        <section className=' flex flex-col md:flex-row items-center justify-between gap-20 pl-3 mt-10 pb-1'>
            <div className=' flex flex-col gap-5 text-green-900 justify-center items-center w-full md:w-1/2'>
                <p className=' uppercase tracking-widest'>welcome to 24 carrots</p>
                <h1 className=' font-bold text-[63px] w-[55%] text-center'>Remarkable catering & Events</h1>
                <p className=' font-sans font-extralight text-black text-center w-[80%]'>24 Carrots is the premier catering and events company of choice in Southern California. We create remarkable experiences by offering the finest quality foods and providing unsurpassed personalized service, driven by our passion for life’s special occasions.</p>
                <button className=' feature-btn flex uppercase font-sans bg-[#C15627] hover:bg-[#ec7b4a] transition-all text-white px-3 py-2 rounded-3xl'>get in touch 
                    <span className='arrow-animation'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
                    </span>
                </button>
            </div>
            <div className=' w-full md:w-1/2 flex flex-col'>
                <div
                    id="imageContainer"
                    className=' relative rounded-tl-[290px] overflow-hidden max-h-[440px] object-cover scroll-smooth transition-all duration-1000'
                >
                    {sliderImages.map((image, index) => (
                        <img
                            key={index}
                            className={`  ${selectedImage === index ? '' : 'hidden'} object-fill h-[550px] w-full `}
                            src={image}
                            alt='image'
                        />
                    ))}
                </div>
                <div>
                    <ol className=' flex gap-3 justify-center m-4'>
                        {sliderImages.map((_, index) => (
                            <li
                                key={index}
                                className={`cursor-pointer w-[30px] h-[2px] ${selectedImage === index ? 'bg-[#ec7b4a]' : 'bg-[#333] '}`}
                                onClick={() => handleImageChange(index)}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    </>
  )
}

export default HeroSection2
